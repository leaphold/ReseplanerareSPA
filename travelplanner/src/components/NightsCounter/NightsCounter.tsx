// import React, {useState} from "react";
// import cities from '@/data/cities.json';

// interface NightsCounterProps {
//     selectedCity: string,
//     handleNightsChange?: (nights: number) => void
// }

// export default function NightsCounter({selectedCity, handleNightsChange}: NightsCounterProps) {
//     const [nights, setNights] = useState(1);

//     const handleLocalNightsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const value = (parseInt(event.target.value));
//         setNights(isNaN(value) ? 1 : value);
//         if (handleNightsChange) {
//             handleNightsChange(isNaN(value) ? 1 : value);
//         }
//     };

//     const calculateTotalCost = () => {
//         const city = cities.find(city => city.name === selectedCity);
//         if (!city) return 0;
//         const costPerNight = parseInt(city.overnight_cost.replace(' SEK', ''));
//         return nights * costPerNight;
//     }

//     return (
//         <div>
//             <label>
//                 Number of nights:
//                 <input type="number" min="1" value={nights} onChange={handleLocalNightsChange}/>
//             </label>
//             <p>Total cost: {calculateTotalCost()} SEK</p>
//         </div>
//     )
// }
import React from "react";
import cities from "@/data/cities.json";

interface NightsCounterProps {
    selectedCity: string;
    nights: number;
    handleNightsChange?: (nights: number) => void;
}

export default function NightsCounter({
    selectedCity,
    nights,
    handleNightsChange,
}: NightsCounterProps) {
    const calculateTotalCost = () => {
        const city = cities.find((city) => city.name === selectedCity);
        if (!city) return 0;
        const costPerNight = parseInt(city.overnight_cost.replace(" SEK", ""));
        return nights * costPerNight; // Här multiplicerar vi alltid med 1 eftersom vi alltid har 1 natt
    };

    return (
        <div>
            <label>
                Number of nights: {nights} {/* Antalet nätter är hårdkodat till 1 */}
            </label>
            <p>Total cost: {calculateTotalCost()} SEK</p>
        </div>
    );
}
