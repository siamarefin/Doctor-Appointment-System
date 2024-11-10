"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"; // Import the CSS file

const TestReport = () => {
  const [testReport, setTestReport] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all patient reports
  useEffect(() => {
    const fetchPatientReport = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctor/patienttestreport`, {
          withCredentials: true, // Ensure cookies are sent and received
        });

        if (response.status === 200) {
          setTestReport(response.data.data);
        } else {
          console.error("Failed to fetch testReport");
        }
      } catch (error) {
        console.error("Error fetching testReport data:", error);
      }
    };

    fetchPatientReport();
  }, []);

  // Filtered data based on search term
  const filteredHistory = testReport.filter((row) =>
    String(row.patient_id).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="history-container">
      <div className="mb-4">
        <input
          type="text"
          className="history-search-input"
          placeholder="Search by Patient ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-auto" style={{ maxHeight: "500px" }}>
        <table className="history-table">
          <thead>
            <tr>
              <th>Patient Id</th>
              <th>Report Id</th>
              <th>Test Name</th>
              <th>Result</th>
              <th>Amount</th>
              <th>Comment</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((row, index) => (
                <tr key={index} className="text-black">
                  <td>{row.patient_id}</td>
                  <td>{row.report_id}</td>
                  <td>{row.test_name}</td>
                  <td>{row.result}</td>
                  <td>{row.amount}</td>
                  <td>{row.comment}</td>
                  
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

export default TestReport;
