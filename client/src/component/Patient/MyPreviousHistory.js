import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function MyPreviousHistory() {
  const { myPreviousHistory } = useDataContext();

  // Function to format date strings
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Customize the locale and format if needed
  };

  return (
    <div className="table-container">
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Treatment</th>
              <th>Doctor ID</th>
              <th>Previous Medicine</th>
              <th>Case Summary</th>
            </tr>
          </thead>
          <tbody>
            {myPreviousHistory.length > 0 ? (
              myPreviousHistory.map((history, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{formatDate(history.date_of_record)}</td>
                  <td className="overflow-hidden">{history.treatment_given}</td>
                  <td className="overflow-hidden">{history.doctor_id}</td>
                  <td className="overflow-hidden">{history.previous_medicine}</td>
                  <td className="overflow-hidden">{history.case_summary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No previous history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPreviousHistory;
