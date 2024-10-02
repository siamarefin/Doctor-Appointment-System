"use client";
import { useState } from "react";
import PatientRegister from "@/component/Register/PatientRegister";

export default function RegisterPage() {
  const [accountType, setAccountType] = useState("patient");

  return (
    <div className=" p-6 rounded-3xl shadow-lg w-full max-w-96 border-2 border-black"
    style={{ backgroundColor: "#075E54" }}>
      <div className="flex justify-around mb-4 border-b">
        <button
          className={`py-2 px-4 w-full text-center ${
            accountType === "patient"
              ? "text-white border-b-2 border-white font-bold tracking-wider text-xl"
              : "text-gray-500"
          }`}
          onClick={() => setAccountType("patient")}
        >
          Patient
        </button>
      </div>
      <PatientRegister />
    </div>
  );
}
