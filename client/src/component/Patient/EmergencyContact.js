import React from "react";
import { useDataContext } from "@/context/DataContext";

function EmergencyContact() {
  const { emergencyContactList } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
    <div className="overflow-auto flex-grow">
      <table className="w-full bg-white table-fixed border-collapse border ">
        <thead className="bg-gray-700 text-black sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start border ">Name</th>
            <th className="px-4 py-2 text-start border ">Department</th>
            <th className="px-4 py-2 text-start border ">Number</th>
            <th className="px-4 py-2 text-start border ">Duty Time</th>
          </tr>
        </thead>
        <tbody>
          {emergencyContactList.map((contact, index) => (
            <tr key={index} className="text-black text-center">
              <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                {contact.name}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                {contact.department}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                {contact.phone}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                {contact.dutytime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

export default EmergencyContact;
