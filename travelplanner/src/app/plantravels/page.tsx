"use client";
// Imports CSS module for styling specific to the travels planning components.
import styles from "./PlanTravels.module.css";
// Imports necessary React components and hooks.
import React, { useCallback, useEffect, useState } from "react";
// Imports hook for managing cookies.
import { useCookies } from "react-cookie";
// Imports various components for handling date ranges, counting nights, listing cities, and activities.
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import NightsCounter from "@/components/NightsCounter/NightsCounter";
import CityList from "@/components/CityList/CityList";
import ActivityList from "@/components/ActivityList/ActivityList";
// Imports a function from a custom database handling module to add travel plans.
import { addTravel } from "@/database";

export default function PlanTravels() {
    // cookie
    const [cookies, setCookie] = useCookies(["user"]);
    const [showUserForm, setShowUserForm] = useState(true);

    // Updates state on client after mount
    useEffect(() => {
        setShowUserForm(!cookies.user);
    }, [cookies.user]);

    // useStates
    const [selectedCity, setSelectedCity] = useState("Stockholm");
    const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() });
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
    const [nights, setNights] = useState(0);
    const [notes, setNotes] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    const [saveMessage, setSaveMessage] = useState("");

    // Handles show form if user is not present
    const handleUserFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const name = (event.target as any)["name"].value;
        const email = (event.target as any)["email"].value;
        setCookie("user", { name, email }, { path: "/" });
        setShowUserForm(false);
    };

    // Handles city selection
    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(() => event.target.value);
        setDateRange(() => ({ start: new Date(), end: new Date() }));
        setSelectedActivities(() => []);
        setNights(() => 0);
        setNotes(() => "");
        setIsSaved(() => false);
    };

    // Updates the date range and calculates nights based on the selected dates.
    const handleDateRangeChange = useCallback((range: { start: Date; end: Date }) => {
        setDateRange(range);
        if (range.start && range.end) {
            const diffInTime = range.end.getTime() - range.start.getTime();
            const diffInDays = diffInTime / (1000 * 3600 * 24);
            const nights = Math.ceil(diffInDays);
            setNights(nights);
        }
    }, []);
    // Updates the count of nights directly.
    const handleNightsChange = (nights: number) => {
        setNights(nights);
    };

    // Handels activity selection
    const handleActivitiesChange = (activity: string, checked: boolean) => {
        if (checked) {
            setSelectedActivities((prevActivities) => [...prevActivities, activity]);
        } else {
            setSelectedActivities((prevActivities) => prevActivities.filter((a) => a !== activity));
        }
    };

    // Handles notes change
    const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(event.target.value);
    };

    // Handle submit to DB on save
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const travelPlan = {
            user: cookies.user,
            city: selectedCity,
            activity: selectedActivities,
            nights,
            dateRange,
            notes,
        };

        addTravel(travelPlan).then((id) => {
            setIsSaved(true);
            setSaveMessage("Travel plan saved!");
            setTimeout(() => {
                setIsSaved(false);
                setSaveMessage("");
            }, 3000);
        });
    };
    // Conditionally renders the form to collect user data or the full travel planning interface.
    return (
        <div className={styles.planTravels}>
            {showUserForm ? (
                <form onSubmit={handleUserFormSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <>
                    <h2>Plan Travels</h2>
                    {saveMessage && <p>{saveMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <h3>Where are you going {cookies.user.name}?</h3>
                        <CityList handleCityChange={handleCityChange} />

                        <h3>When will you be there?</h3>
                        <DateRangePicker
                            key={`datePicker-${selectedCity}`}
                            handleDateRangeChange={handleDateRangeChange}
                            handleNightsChange={handleNightsChange}
                        />

                        <h3>What activity are you going to do?</h3>
                        <ActivityList
                            key={`activityList-${selectedCity}`}
                            selectedCity={selectedCity}
                            handleActivitiesChange={handleActivitiesChange}
                        />

                        <h3>How many nights are you staying?</h3>
                        <NightsCounter
                            key={`nightsCounter-${selectedCity}`}
                            selectedCity={selectedCity}
                            nights={nights}
                        />

                        <h3>Notes for your trip.</h3>
                        <textarea key={selectedCity} onChange={handleNotesChange}></textarea>
                        <br />
                        <button type="submit">{isSaved ? "Saved" : "Save"}</button>
                    </form>
                </>
            )}
        </div>
    );
}
