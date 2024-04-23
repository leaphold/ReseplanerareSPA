'use client'

import styles from "./page.module.css"
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";


export default function PlanTravels() {

  return (
      <div className={styles.planTravels}>

        <h2>Plan Travels</h2>

          <form>
            <h3>Where are you going?</h3>
            {/*List component to choose a town?*/}
            
            <h3>When will you be there?</h3>
            <DateRangePicker />

            <h3>What acitvity are you going to do?</h3>
            {/*List component to choose an activity?*/}

            <h3>How many nights are you staying?</h3>
            {/*Number input component with calculator*/}

            <h3>Notes for your trip.</h3>
            <RichTextEditor />
          </form>
      </div>
  );
}