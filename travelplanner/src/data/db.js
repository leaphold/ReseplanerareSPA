import { openDB } from 'idb';

async function createDatabase() {
  console.log("createDatabase function called");
  try {
    return await openDB('Travels', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('travels')) {
          const store = db.createObjectStore('travels', {keyPath: 'id', autoIncrement: true});
          store.createIndex('destination', 'destination', {unique: false});
          store.createIndex('dates', 'dates', {unique: false});
          store.createIndex('notes', 'notes', {unique: false});
        }
      },
    });
  } catch (error) {
    console.error("Error creating database:", error);
  }
}

export default createDatabase;