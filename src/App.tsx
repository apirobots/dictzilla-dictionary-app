import React, { useState, useEffect } from 'react';
import { Book, Loader } from 'lucide-react';
import { fetchLanguages, fetchTranslation } from './api';
import { Language, Translation } from './types';
import LanguageSelector from './components/LanguageSelector';
import TranslationResult from './components/TranslationResult';

function App() {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [translation, setTranslation] = useState<Translation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cachedLanguages = localStorage.getItem('cachedLanguages');
    if (cachedLanguages) {
      setLanguages(JSON.parse(cachedLanguages));
    } else {
      fetchLanguages().then((fetchedLanguages) => {
        setLanguages(fetchedLanguages);
        localStorage.setItem('cachedLanguages', JSON.stringify(fetchedLanguages));
      });
    }

    // Load saved language selections
    const savedSourceLanguage = localStorage.getItem('sourceLanguage');
    const savedTargetLanguage = localStorage.getItem('targetLanguage');
    if (savedSourceLanguage) setSourceLanguage(savedSourceLanguage);
    if (savedTargetLanguage) setTargetLanguage(savedTargetLanguage);
  }, []);

  const handleSourceLanguageChange = (value: string) => {
    setSourceLanguage(value);
    localStorage.setItem('sourceLanguage', value);
  };

  const handleTargetLanguageChange = (value: string) => {
    setTargetLanguage(value);
    localStorage.setItem('targetLanguage', value);
  };

  const handleTranslate = async () => {
    if (!sourceLanguage || !targetLanguage || !inputWord) return;

    setIsLoading(true);
    try {
      const result = await fetchTranslation(inputWord, sourceLanguage, targetLanguage);
      setTranslation(result);
    } catch (error) {
      console.error('Translation error:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleTranslate();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-3xl mx-auto flex-grow">
        <div className="text-center mb-8">
          <Book className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900">DictZilla Dictionary</h1>
            <p className="mt-2 text-md text-gray-600">
            DictZilla Dictionary is your go-to tool for quick translations. 
            Whether you're learning a new language or need to translate a word on the fly, 
            DictZilla provides reliable translations with contextual understanding.
            </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            <LanguageSelector
              languages={languages}
              value={sourceLanguage}
              onChange={handleSourceLanguageChange}
              label="Source Language"
            />
            <LanguageSelector
              languages={languages}
              value={targetLanguage}
              onChange={handleTargetLanguageChange}
              label="Target Language"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="inputWord" className="block text-sm font-medium text-gray-700 mb-1">
              Word to Translate
            </label>
            <input
              type="text"
              id="inputWord"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            onClick={handleTranslate}
            disabled={isLoading || !sourceLanguage || !targetLanguage || !inputWord}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Translating...
              </>
            ) : (
              'Translate'
            )}
          </button>
        </div>

        <TranslationResult translation={translation} />
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        Powered by <a href="https://www.apirobots.pro" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">APIRobots</a>
      </footer>
    </div>
  );
}

export default App;