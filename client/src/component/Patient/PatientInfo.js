import React from "react";
import { useState,useEffect } from "react";

function PatientInfo() {

  const [patient, setPatient] = useState({});
  const [Error, setError] = useState("");

  useEffect(() => {
    const patientData = localStorage.getItem("patient");

    if (patientData) {
      setPatient(JSON.parse(patientData));
    }
  }, []);






  return (
    <div className="h-full bg-white">
      <div className="flex justify-center p-4  text-black tracking-widest text-2xl border-b-8 mb-4">
        Patient Info
      </div>
      <div className="p-4 text-lg text-black tracking-wider">
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="p-2">Patient ID:</td>
              <td className="p-2 text-right">{patient.id}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Name:</td>
              <td className="p-2 text-right">{patient.name}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Age:</td>
              <td className="p-2 text-right">{patient.age}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Mobile Number:</td>
              <td className="p-2 text-right">0{patient.phone}</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientInfo;