import {openDB} from 'idb';

async function createDatabase() {
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
}

export default createDatabase;