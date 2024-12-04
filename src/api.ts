import { Language, Translation } from './types';

const API_BASE_URL = 'https://dictzilla-dictionary-api-v2-by-apirobots.p.rapidapi.com/v2';
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': RAPIDAPI_KEY,
		'X-RapidAPI-Host': RAPIDAPI_HOST
	}
};

export async function fetchLanguages(): Promise<Language[]> {
  const response = await fetch(`${API_BASE_URL}/languages`, options);
  if (!response.ok) {
    throw new Error('Failed to fetch languages');
  }
  const data = await response.json();
  console.log("response: " + data);
  return data.items;
}

export async function fetchTranslation(text: string, source: string, target: string): Promise<Translation> {
  const response = await fetch(`${API_BASE_URL}/translations?text=${encodeURIComponent(text)}&source=${source}&target=${target}`, options);
  if (!response.ok) {
    throw new Error('Failed to fetch translation');
  }
  const data = await response.json();
  console.log("response: " + data);
  return data;
}