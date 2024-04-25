import React from 'react';
import cities from '@/data/cities.json';

const CityList = ({ handleCityChange }: { handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
        <select onChange={handleCityChange}>
            {cities.map((city, index) => (
                <option key={index} value={city.name}>{city.name}</option>
            ))}
        </select>
    );
}

export default CityList;