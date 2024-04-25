'use client';

import React, { useState } from 'react';
import UserForm from "@/components/UserForm/UserForm";
import ListMyTravels from "@/components/ListMyTravels/ListMyTravels";
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';



export default function MyTravels() {
  const [showUserForm, setShowUserForm] = useState(true);
  const [cookies, setCookie] = useCookies(['user'])

  useEffect(() => {
    setShowUserForm(!cookies.user);
  }, []);

  const handleUserSubmit = (user: {name: string, email: string}) => {
    // handle user submission
    setShowUserForm(false);
  }

  return showUserForm ? <UserForm onUserSubmit={handleUserSubmit} /> : <ListMyTravels />;
}
