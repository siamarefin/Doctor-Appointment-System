"use client";
import React, { useState,useEffect} from "react";
import axios from "axios";



const TestReport = () => {
 
  const [testReport, settestReport] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all patient history
  useEffect(() => {
    const fetchPatientReport = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctor/patienttestreport`, {
          withCredentials: true, // Ensure cookies are sent and received
        });

        if (response.status === 200) {
          settestReport(response.data.data); 
          console.error('Failed to fetch testReport');
        }
      } catch (error) {
        console.error('Error fetching testReport data:', error);
      }
    };

    fetchPatientReport(); // Call the function inside useEffect
  }, []);

  // Filtered data based on search term
const filteredHistory = testReport.filter(row =>
  String(row.patient_id).toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="rounded-xl bg-gray-300">
    <div className="mb-4 border rounded-xl">
      <input
        type="text"
        className="border text-black border-gray-400 rounded-xl p-2 w-full"
        placeholder="Search by Patient ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  
    <div className="overflow-auto  " style={{ maxHeight: "500px" }}>
      <table className="w-full table-auto">
        <thead className="bg-black text-white text-center">
          <tr>
            <th className="px-4 py-2" style={{ textAlign: "left" }}>Report Id</th>
            <th className="px-4 py-2" style={{ textAlign: "left" }}>Test name</th>
            <th className="px-4 py-2" style={{ textAlign: "left" }}>Result</th>
            <th className="px-4 py-2" style={{ textAlign: "left" }}>Amount</th>
            <th className="px-4 py-2" style={{ textAlign: "left" }}>Comment</th>
            <th className="px-4 py-2" style={{ textAlign: "left" }}>Patient Id</th>
          </tr>
        </thead>
        <tbody className="bg-white text-center">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((row, index) => (
              <tr key={index} className="border text-black">
                <td className="px-4 py-2 border">{row.report_id}</td>
                <td className="px-4 py-2 border">{row.test_name}</td>
                <td className="px-4 py-2 border">{row.result}</td>
                <td className="px-4 py-2 border">{row.amount}</td>
                <td className="px-4 py-2 border">{row.comment}</td>
                <td className="px-4 py-2 border">{row.patient_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2 text-black text-center" colSpan="7">
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
