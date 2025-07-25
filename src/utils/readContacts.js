import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data.toString('utf-8'));
  } catch (error) {
    console.error(error);
  }
};
