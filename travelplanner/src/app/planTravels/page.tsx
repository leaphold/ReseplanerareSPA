'use client'

import styles from "./page.module.css"
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";
import {useState} from "react";


export default function PlanTravels() {
    
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState({start: null, end: null });
    const [notes, setNotes] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const travelPlan = {destination, dates, notes };
        await add(travelPlan);
    };
    
  return (
      <div className={styles.planTravels}>
        <h2>Plan Travels</h2>

          <form onSubmit={handleSubmit}>
            <h3>Where are you going?</h3>
            {/*List component to choose a town?*/}
    
            <h3>When will you be there?</h3>
            <DateRangePicker dates={dates} setDates={setDates}/>
            <h3>What will you do there?</h3>
            <RichTextEditor />
          </form>
      </div>
  );
}