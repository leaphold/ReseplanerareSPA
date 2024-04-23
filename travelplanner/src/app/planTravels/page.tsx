'use client'

import styles from "./page.module.css"
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import React, {useCallback, useState} from "react";
import NightsCounter from "@/components/NightsCounter/NightsCounter";
import CityList from "@/components/CityList/CityList";
import ActivityList from "@/components/ActivityList/ActivityList";
import {addTravel} from "@/database";


export default function PlanTravels() {
  const [selectedCity, setSelectedCity] = useState('Stockholm');
  const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() });
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [nights, setNights] = useState(1);
  const [notes, setNotes] = useState('');
  
  
  // Handles city selection
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }
  
  // Handles date range selection
  const handleDateRangeChange = useCallback((range: {start: Date, end: Date }) => {
    setDateRange(range)
  }, []);
  
  // Handels activity selection
  const handleActivitiesChange = (activity: string, checked: boolean) => {
    if (checked) {
      setSelectedActivities(prevActivities => [...prevActivities, activity]);
    } else {
      setSelectedActivities(prevActivities => prevActivities.filter(a => a !== activity))
    }
  }
  
  // Handles selected nights
  const handleNightsChange = (nights: number) => {
    setNights(nights)
  }
  
  // Handles nots change
  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value)
  }
  
  // Handle submit to DB on save
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const travelPlan =  { city: selectedCity, activity: selectedActivities, nights, dateRange, notes }
    addTravel(travelPlan).then(id => {
      console.log('Added: ', id);
    });
  }

  return (
      <div className={styles.planTravels}>

        <h2>Plan Travels</h2>

          <form onSubmit={handleSubmit}>
            <h3>Where are you going?</h3>
            <CityList handleCityChange={handleCityChange} />
                        
            <h3>When will you be there?</h3>
            <DateRangePicker handleDateRangeChange={handleDateRangeChange} />

            <h3>What activity are you going to do?</h3>
            <ActivityList selectedCity={selectedCity} handleActivitiesChange={handleActivitiesChange}/>

            <h3>How many nights are you staying?</h3>
            <NightsCounter selectedCity={selectedCity} handleNightsChange={handleNightsChange} />

            <h3>Notes for your trip.</h3>
            <textarea onChange={handleNotesChange}></textarea>
            <br />
            <button type="submit">Save</button>
          </form>
      </div>
  );
}