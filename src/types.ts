export interface Language {
  code: string;
  name: string;
}

export interface Translation {
  word: string;
  translation: string;
  part_of_speech: string;
  definition: string;
  contextual_examples: {
    title: string;
    examples: string[];
    translations: string[];
  }[];
  nuances: string[];
  plural: string | null;
  synonyms: string[];
  antonyms: string[];
  idioms: string[];
  proverbs: string[];
  origin: string;
  gender: string | null;
  register: string;
  collocations: string[];
  history: string;
  pronunciation: string;
  phrases: string[];
  dialogues: string[];
  cultural_significance: string;
}