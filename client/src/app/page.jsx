"use client";
import React from "react";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function page() {
  const router = useRouter();
  // Check if session exists
  useEffect(() => {
    const patientsession = localStorage.getItem('patient');
    const doctorsession = localStorage.getItem('doctor');
    if (!patientsession && !doctorsession)
    {
      // Redirect to profile if session exists
      router.push('/login');
    }
    else if (patientsession && !doctorsession)
      {
        // Redirect to profile if session exists
        router.push('/patient');
      }
 
   else if (!patientsession && doctorsession)
    {
      // Redirect to profile if session exists
      router.push('/doctor');
    }
}, [router]);

  return (
    <div className="flex text-center  h-screen bg-sky-400">
      <h1 className="text-9xl text-white">Hospital Management System </h1>
    </div>
  );
}

export default page;
