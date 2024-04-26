// Ensures that the code runs in client-side mode only.
"use client";

// Imports necessary React components and hooks.
import React, { useState, useEffect } from "react";

// Imports UserForm and ListMyTravels components from specified paths.
import UserForm from "@/components/UserForm/UserForm";
import ListMyTravels from "@/components/ListMyTravels/ListMyTravels";

// Imports hook for managing cookies within the application.
import { useCookies } from "react-cookie";

// Defines the MyTravels component, which manages the state and rendering of the user interface related to travels.
export default function MyTravels() {
    // Manages the visibility of the UserForm component based on user cookie existence.
    const [showUserForm, setShowUserForm] = useState(true);

    // Retrieves and manages cookie data, specifically looking for 'user' cookie.
    const [cookies, setCookie] = useCookies(["user"]);

    // React effect hook to check if the user information is stored in cookies and adjust the form visibility accordingly.
    useEffect(() => {
        // Sets the form's visibility based on whether user data exists in cookies.
        setShowUserForm(!cookies.user);
    }, []);

    // Function to handle the submission of user data from the UserForm.
    const handleUserSubmit = (user: { name: string; email: string }) => {
        setShowUserForm(false);
    };

    // Conditionally renders the UserForm or ListMyTravels components based on the state of showUserForm.
    return showUserForm ? <UserForm onUserSubmit={handleUserSubmit} /> : <ListMyTravels />;
}
