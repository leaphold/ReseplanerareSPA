import React from "react";
import cities from '@/data/cities.json';

export default function ActivityList() {

  return (
    <div className="activityContainer">
      <h2>Cities and Activities</h2>
      {cities.map((city, index) => (
        <div key={index}>
          <h3>{city.name}</h3>
          <ul>
            {city.activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
          <p>Overnight cost: {city.overnight_cost}</p>
        </div>
      ))}
    </div>
  )
}
