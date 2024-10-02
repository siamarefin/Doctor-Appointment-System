"use client";
import React, { useState } from "react";

// Sample previousHistory array with 20 records (as per your earlier request)
const previousHistory = [
  {
    fullText: "Md. Rohim Khan",
    patient_id: "P-5130",
    date_of_record: "7 Jun 2024",
    treatment_given: "Root canal surgery",
    doctor_id: "D-8976",
    previous_medicine: "Napa Extra",
    cases_summary: "Eat soft and healthy",
  },
  {
    fullText: "Sarah Ali",
    patient_id: "P-5465",
    date_of_record: "10 Apr 2024",
    treatment_given: "Tooth extraction",
    doctor_id: "D-7843",
    previous_medicine: "Ibuprofen",
    cases_summary: "Rest and avoid cold drinks",
  },
  {
    fullText: "John Smith",
    patient_id: "P-7865",
    date_of_record: "23 Feb 2024",
    treatment_given: "Filling",
    doctor_id: "D-2234",
    previous_medicine: "Amoxicillin",
    cases_summary: "Follow-up in 2 weeks",
  },
  // ... Add more patient records
];

const PatientSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(previousHistory);

  // Handle input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    // Filter the previousHistory array by matching the patient_id
    const filtered = previousHistory.filter((patient) =>
      patient.patient_id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  return (
    <div className="container p-4">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Search by Patient ID..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Patient Details */}
      {filteredPatients.length > 0 ? (
        <div className="border border-gray-300 rounded p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
          {filteredPatients.map((patient, index) => (
            <div key={index} className="mb-4 p-2 border-b last:border-none">
              <p><strong>Patient ID:</strong> {patient.patient_id}</p>
              <p><strong>Name:</strong> {patient.fullText}</p>
              <p><strong>Date of Record:</strong> {patient.date_of_record}</p>
              <p><strong>Treatment Given:</strong> {patient.treatment_given}</p>
              <p><strong>Doctor ID:</strong> {patient.doctor_id}</p>
              <p><strong>Previous Medicine:</strong> {patient.previous_medicine}</p>
              <p><strong>Case Summary:</strong> {patient.cases_summary}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500">No patients found with the given ID.</p>
      )}
    </div>
  );
};

export default PatientSearch;
