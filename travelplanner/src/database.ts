import { openDB, DBSchema, IDBPDatabase } from "idb";
// Defines a TypeScript interface for User details.
interface User {
    name: string;
    email: string;
}
// Defines a TypeScript interface for Travel details.
interface Travel {
    id?: number;
    user: User;
    city: string;
    dateRange: { start: Date; end: Date };
    activity: string[];
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
    return openDB<TravelDB>("travelDatabase", 1, {
        upgrade(db) {
            db.createObjectStore("travels", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });
}
// Function to create IndexedDB database with a `travels` object store
async function addTravel(travel: Travel): Promise<number> {
    const db = await createDatabase();
    return db.add("travels", travel);
}
//get all travels
async function getAllTravels(): Promise<Travel[]> {
    const db = await createDatabase();
    return db.getAll("travels");
}

//delete a travel with help of the id
async function deleteTravel(id: number): Promise<void> {
    const db = await createDatabase();
    return db.delete("travels", id);
}

// Export the addTravel, getAllTravels, and deleteTravel functions to be used elsewhere in the application.
export { addTravel, getAllTravels, deleteTravel };
