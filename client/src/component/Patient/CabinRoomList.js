import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function CabinRoomList() {
  const { cabinRoomList } = useDataContext();

  return (
    <div className="table-container">
      <div className="overflow-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Cabin Name</th>
              <th>Room Number</th>
              <th>Assigned Nurse ID</th>
              <th>Supervising Doctor ID</th>
              <th>Case Summary</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {cabinRoomList.length > 0 ? (
              cabinRoomList.map((cabin, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{cabin.name}</td>
                  <td className="overflow-hidden">{cabin.room_number}</td>
                  <td className="overflow-hidden">{cabin.assigned_nurse}</td>
                  <td className="overflow-hidden">{cabin.supervising_doctor}</td>
                  <td className="overflow-hidden">{cabin.case_summary}</td>
                  <td className="overflow-hidden">{cabin.bill}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No cabin rooms available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CabinRoomList;
