import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let existingsContacts = await readContacts();
  try {
    const user = faker.helpers.multiple(createFakeContact, {
      count: 1,
    });
    await writeContacts([...existingsContacts, ...user]);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
