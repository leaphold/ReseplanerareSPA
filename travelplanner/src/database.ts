import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface Travel {
    id?: number;
    city: string;
    dateRange: { start: Date, end: Date };
    activity: string;
    nights: number;
    notes: string;
}

interface TravelDB extends DBSchema {
    travels: {
        key: number;
        value: Travel;
    };
}

async function createDatabase(): Promise<IDBPDatabase<TravelDB>> {
    return openDB<TravelDB>('travelDatabase', 1, {
        upgrade(db) {
            db.createObjectStore('travels', {
                keyPath: 'id',
                autoIncrement: true,
            });
        },
    });
}

async function addTravel(travel: Travel): Promise<number> {
    const db = await createDatabase();
    return db.add('travels', travel);
}

async function getAllTravels(): Promise<Travel[]> {
    const db = await createDatabase();
    return db.getAll('travels');
}

export { addTravel, getAllTravels };