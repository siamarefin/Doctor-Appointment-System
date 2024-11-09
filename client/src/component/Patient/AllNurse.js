import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function AllNurse() {
  const { nurseInfo } = useDataContext();

  return (
    <div className="table-container">
      <div className="overflow-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Allocation</th>
              <th>Address</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {nurseInfo.length > 0 ? (
              nurseInfo.map((nurse, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{nurse.name}</td>
                  <td className="overflow-hidden">{nurse.gender}</td>
                  <td className="overflow-hidden">{nurse.allocation}</td>
                  <td className="overflow-hidden">{nurse.address}</td>
                  <td className="overflow-hidden">{nurse.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No nurse information available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllNurse;
