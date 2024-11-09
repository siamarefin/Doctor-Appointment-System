import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function Ambulance() {
  const { ambulanceList } = useDataContext();

  return (
    <div className="table-container">
      <div className="overflow-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Number</th>
              <th>Duty Time</th>
            </tr>
          </thead>
          <tbody>
            {ambulanceList.length > 0 ? (
              ambulanceList.map((ambulance, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{ambulance.drivername}</td>
                  <td className="overflow-hidden">{ambulance.phone}</td>
                  <td className="overflow-hidden">{ambulance.dutytime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data">
                  No ambulance data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ambulance;
