import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export const writeContacts = async (updatedContacts) => {
  try {
    const DB_DIR = path.dirname(PATH_DB);
    await fs.mkdir(DB_DIR, { recursive: true });
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};
