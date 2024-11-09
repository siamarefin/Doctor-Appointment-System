import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import your style.css file

function MyReport() {
  const { myReports } = useDataContext();

  return (
    <div className="table-container"> {/* Use the general table container class */}
      <table className="table"> {/* Apply the .table class for styling */}
        <thead>
          <tr>
            <th className="w-[40%]">Test Name</th>
            <th>Result</th>
            <th>Amount</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {myReports.length > 0 ? (
            myReports.map((report, index) => (
              <tr key={index} className="text-center">
                <td className="overflow-hidden">{report.test_name}</td>
                <td className="overflow-hidden">{report.result}</td>
                <td className="overflow-hidden">{report.amount}</td>
                <td className="overflow-hidden">{report.comment}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyReport;
