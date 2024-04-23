import React from 'react';
import cities from './data/cities.json';

const CityList=()=>{
    return(
        <ul>
            {cities.map((city, index) =>(
                <li key={index}>{city.name}</li>
            ))}
        </ul>
    );
}

export default CityList;