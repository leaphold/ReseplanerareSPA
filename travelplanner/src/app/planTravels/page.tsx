'use client'

import styles from "./page.module.css"
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import React, {useState} from "react";
import NightsCounter from "@/components/NightsCounter/NightsCounter";
import CityList from "@/components/CityList/CityList";
import ActivityList from "@/components/ActivityList/ActivityList";


export default function PlanTravels() {
  const [selectedCity, setSelectedCity] = useState('');
  
  // Function to handle city selection
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  return (
      <div className={styles.planTravels}>

        <h2>Plan Travels</h2>

          <form>
            <h3>Where are you going?</h3>
            <CityList handleCityChange={handleCityChange} />
                        
            <h3>When will you be there?</h3>
            <DateRangePicker />

            <h3>What activity are you going to do?</h3>
            <ActivityList selectedCity={selectedCity}/>

            <h3>How many nights are you staying?</h3>
            <NightsCounter selectedCity={selectedCity}/>

            <h3>Notes for your trip.</h3>
            <textarea></textarea>
          </form>
      </div>
  );
}