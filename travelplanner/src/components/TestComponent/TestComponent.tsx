import React, { useEffect } from 'react';
import { addTravel, getAllTravels } from '@/database';

export default function TestComponent() {
    useEffect(() => {
        async function testDatabase() {
            // Add a new travel
            const travelId = await addTravel({
                city: 'Stockholm',
                dateRange: { start: new Date(), end: new Date() },
                activity: 'Sightseeing',
                nights: 5,
                notes: 'Looking forward to this trip!',
            });

            console.log(`Added travel with ID ${travelId}`);

            // Get all travels
            const travels = await getAllTravels();
            console.log('All travels:', travels);
        }

        testDatabase();
    }, []);

    return <div>Testing database...</div>;
}