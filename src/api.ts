import { Language, Translation } from './types';

const API_BASE_URL = 'https://[rapidapi-host]/v2';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '[rapidapi-key]',
		'X-RapidAPI-Host': '[rapidapi-host]'
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