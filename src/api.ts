import { Language, Translation } from './types';

const API_BASE_URL = 'https://dictzilla-api.apirobots.pro/v2';

export async function fetchLanguages(): Promise<Language[]> {
  const response = await fetch(`${API_BASE_URL}/languages`);
  const data = await response.json();
  return data.items;
}

export async function fetchTranslation(text: string, source: string, target: string): Promise<Translation> {
  const response = await fetch(`${API_BASE_URL}/translations?text=${encodeURIComponent(text)}&source=${source}&target=${target}`);
  if (!response.ok) {
    throw new Error('Failed to fetch translation');
  }
  return await response.json();
}