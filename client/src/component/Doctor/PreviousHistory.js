"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css"; // Import the CSS file

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
          console.error("Failed to fetch previousHistory");
        }
      } catch (error) {
        console.error("Error fetching previousHistory data:", error);
      }
    };

    fetchPatientHistory(); // Call the function inside useEffect
  }, []);

  // Filtered data based on search term
  const filteredHistory = previousHistory.filter((row) =>
    String(row.doctor_id).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="history-container">
      <div>
        <input
          type="text"
          className="history-search-input"
          placeholder="Search by Doctor ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-auto" style={{ maxHeight: "500px" }}>
        <table className="history-table">
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Patient ID</th>
              <th>Date of Record</th>
              <th>Treatment Given</th>
              <th>Previous Medicine</th>
              <th>Case Summary</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((row, index) => (
                <tr key={index} className="border text-black">
                  <td>{row.doctor_id}</td>
                  <td>{row.patient_id}</td>
                  <td>{row.date_of_record}</td>
                  <td>{row.treatment_given}</td>
                  <td>{row.previous_medicine}</td>
                  <td>{row.case_summary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="history-no-data" colSpan="6">
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
