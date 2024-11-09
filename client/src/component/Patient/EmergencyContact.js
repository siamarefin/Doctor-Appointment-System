import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function EmergencyContact() {
  const { emergencyContactList } = useDataContext();

  return (
    <div className="table-container">
      <div className="overflow-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Number</th>
              <th>Duty Time</th>
            </tr>
          </thead>
          <tbody>
            {emergencyContactList.length > 0 ? (
              emergencyContactList.map((contact, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{contact.name}</td>
                  <td className="overflow-hidden">{contact.department}</td>
                  <td className="overflow-hidden">{contact.phone}</td>
                  <td className="overflow-hidden">{contact.dutytime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No emergency contacts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmergencyContact;
