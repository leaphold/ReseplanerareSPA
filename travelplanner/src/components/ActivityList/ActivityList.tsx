import React from "react";
import cities from '@/data/cities.json';

interface ActivityListProps {
    selectedCity: string;
}

export default function ActivityList({ selectedCity }: ActivityListProps) {
    const city = cities.find(city => city.name === selectedCity);

    return (
        <div className="activityContainer">
            <h2>Activities in {selectedCity}</h2>
            {city && (
                <ul>
                    {city.activities.map((activity, idx) => (
                    <li key={idx}>
                        <label>
                            <input type="checkbox" value={activity} />
                            {activity}
                        </label>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    )
}