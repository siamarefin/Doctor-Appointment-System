"use client";
import { useState } from "react";
import AdminLogin from "@/component/Login/AdminLogin";
import PatientLogin from "@/component/Login/PatientLogin";

export default function LoginPage() {
  const [accountType, setAccountType] = useState("patient");

  return (
    <div
      className=" p-6 rounded-3xl shadow-lg w-full max-w-96 border-2 border-black"
      style={{ backgroundColor: "#075E54" }}
    >
      <div className="flex justify-around mb-4 border-b">
        <button
          className={`py-2 px-4 w-full text-center ${
            accountType === "patient"
              ? "text-white border-b-8 border-white font-bold tracking-wider text-xl"
              : "text-black text-lg tracking-wide"
          }`}
          onClick={() => setAccountType("patient")}
        >
          Patient
        </button>
        <button
          className={`py-2 px-4 w-full text-center ${
            accountType === "Doctor"
              ? "text-white border-b-8 border-white font-bold tracking-wider text-xl"
              : "text-black text-lg tracking-wide"
          }`}
          onClick={() => setAccountType("Doctor")}
        >
          Doctor
        </button>
      </div>

      {accountType === "Doctor" ? <AdminLogin /> : <PatientLogin />}
    </div>
  );
}
