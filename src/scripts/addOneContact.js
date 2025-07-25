import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    let existingsContacts = await readContacts();
    const user = faker.helpers.multiple(createFakeContact, {
      count: 1,
    });
    await writeContacts([...existingsContacts, ...user]);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
