import { faker } from '@faker-js/faker';

import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const users = faker.helpers.multiple(createFakeContact, { count: number });
    let existingsContacts = await readContacts();
    await writeContacts([...users, ...existingsContacts]);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(3);
