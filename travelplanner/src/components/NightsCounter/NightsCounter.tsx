import React from "react";
import cities from "@/data/cities.json";

interface NightsCounterProps {
    selectedCity: string;
    nights: number;
}

export default function NightsCounter({ selectedCity, nights }: NightsCounterProps) {
    const nightCost = () => {
        const city = cities.find((city) => city.name === selectedCity);
        if (!city) return 0;
        const costPerNight = city.overnight_cost;
        return costPerNight; // Här multiplicerar vi alltid med 1 eftersom vi alltid har 1 natt
    };

    const calculateTotalCost = () => {
        const city = cities.find((city) => city.name === selectedCity);
        if (!city) return 0;
        const costPerNight = parseInt(city.overnight_cost.replace(" SEK", ""));
        return nights * costPerNight; // Här multiplicerar vi alltid med 1 eftersom vi alltid har 1 natt
    };

    return (
        <div>
            <label>Number of nights: {nights}</label>
            <p>Cost per night: {nightCost()}</p>
            <p>Total cost: {calculateTotalCost()} SEK</p>
        </div>
    );
}
