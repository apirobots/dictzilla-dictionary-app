import React from 'react';
import { Translation } from '../types';

interface TranslationResultProps {
  translation: Translation | null;
}

const TranslationResult: React.FC<TranslationResultProps> = ({ translation }) => {
  console.log("translation: " + translation);

  if (!translation) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">{translation.word} → {translation.translation}</h2>
      <p className="text-gray-600 mb-2">{translation.part_of_speech}</p>
      <p className="mb-4">{translation.definition}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Contextual Examples</h3>
            {translation.contextual_examples && translation.contextual_examples.map((example, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium">{example.title}</h4>
              <ul className="list-disc list-inside">
              {example.examples.map((ex, i) => (
                <li key={i} className="mb-1">
                {ex} - <span className="text-gray-600">{example.translations[i]}</span>
                </li>
              ))}
              </ul>
            </div>
            ))}
        </div>

        <div>
          {translation.nuances && translation.nuances.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Nuances</h3>
              <ul className="list-disc list-inside">
                {translation.nuances.map((nuance, index) => (
                  <li key={index}>{nuance}</li>
                ))}
              </ul>
            </div>
          )}

          {translation.plural && translation.plural != null && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Plural</h3>
              <p>{translation.plural}</p>
            </div>
          )}

          {translation.synonyms.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Synonyms</h3>
              <p>{translation.synonyms.join(', ')}</p>
            </div>
          )}

          {translation.antonyms.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Antonyms</h3>
              <p>{translation.antonyms.join(', ')}</p>
            </div>
          )}

          {translation.idioms.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Idioms</h3>
              <ul className="list-disc list-inside">
                {translation.idioms.map((idiom, index) => (
                  <li key={index}>{idiom}</li>
                ))}
              </ul>
            </div>
          )}

          {translation.proverbs.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Proverbs</h3>
              <ul className="list-disc list-inside">
                {translation.proverbs.map((proverb, index) => (
                  <li key={index}>{proverb}</li>
                ))}
              </ul>
            </div>
          )}

          {translation.origin && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Origin</h3>
              <p>{translation.origin}</p>
            </div>
          )}

          {translation.gender && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Gender</h3>
              <p>{translation.gender}</p>
            </div>
          )}

          {translation.register && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p>{translation.register}</p>
            </div>
          )}

          {translation.collocations.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Collocations</h3>
              <p>{translation.collocations.join(', ')}</p>
            </div>
          )}

          {translation.history && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">History</h3>
              <p>{translation.history}</p>
            </div>
          )}

          {translation.pronunciation && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Pronunciation</h3>
              <p>{translation.pronunciation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslationResult;