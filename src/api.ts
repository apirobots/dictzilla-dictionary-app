import { Language, Translation } from './types';

// const API_BASE_URL = 'https://dictzilla-api.apirobots.pro/v2';
// const API_BASE_URL = 'http://localhost:3001/api';
const API_BASE_URL = '/.netlify/functions';


export async function fetchLanguages(): Promise<Language[]> {
  const response = await fetch(`${API_BASE_URL}/languages`);
  if (!response.ok) {
    throw new Error('Failed to fetch languages');
  }
  const data = await response.json();
  console.log("response: " + data);
  return data.items;
}

export async function fetchTranslation(text: string, source: string, target: string): Promise<Translation> {
  const response = await fetch(`${API_BASE_URL}/translations`);
    // ?text=${encodeURIComponent(text)}&source=${source}&target=${target}`);
  if (!response.ok) {
    throw new Error('Failed to fetch translation');
  }
  return await response.json();
}