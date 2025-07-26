import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await readContacts();
    if (data.length >= 0) {
      return writeContacts([]);
    }
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
