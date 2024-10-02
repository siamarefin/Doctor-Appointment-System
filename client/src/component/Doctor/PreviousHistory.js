"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PriviousHistory = () => {
  const [previousHistory, setPreviousHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all patient history
  useEffect(() => {
    const fetchPatientHistory = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctor/patienthistory`, {
          withCredentials: true, // Ensure cookies are sent and received
        });

        if (response.status === 200) {
          setPreviousHistory(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch previousHistory');
        }
      } catch (error) {
        console.error('Error fetching previousHistory data:', error);
      }
    };

    fetchPatientHistory(); // Call the function inside useEffect
  }, []);

// Filtered data based on search term
const filteredHistory = previousHistory.filter(row =>
  String(row.patient_id).toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="rounded-xl bg-gray-300 p-4">
      <div className="mb-4 ">
        <input
          type="text"
          className="border border-gray-400 text-black rounded-xl p-2 w-full"
          placeholder="Search by Patient ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-auto " style={{ maxHeight: "500px" }}>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-2" style={{ textAlign: "left" }}>Patient ID</th>
              <th className="px-4 py-2" style={{ textAlign: "left" }}>Date of Record</th>
              <th className="px-4 py-2" style={{ textAlign: "left" }}>Treatment Given</th>
              <th className="px-4 py-2" style={{ textAlign: "left" }}>Doctor ID</th>
              <th className="px-4 py-2" style={{ textAlign: "left" }}>Previous Medicine</th>
              <th className="px-4 py-2" style={{ textAlign: "left" }}>Case Summary</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((row, index) => (
                <tr key={index} className="border text-black">
                  <td className="px-4 py-2 border">{row.patient_id}</td>
                  <td className="px-4 py-2 border">{row.date_of_record}</td>
                  <td className="px-4 py-2 border">{row.treatment_given}</td>
                  <td className="px-4 py-2 border">{row.doctor_id}</td>
                  <td className="px-4 py-2 border">{row.previous_medicine}</td>
                  <td className="px-4 py-2 border">{row.case_summary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 text-black py-2 text-center" colSpan="6">
                  No patients found with the given ID.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriviousHistory;
