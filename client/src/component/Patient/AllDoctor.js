import React from "react";
import { useDataContext } from "@/context/DataContext";

function AllDoctor() {
  const { doctorInfo } = useDataContext();



  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <div className="overflow-auto flex-grow">
        <table className="w-full table-fixed border-collapse bg-white text-black">
          <thead className="bg-gray-700 text-black sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-start border border-gray-400">Name</th>
              <th className="px-4 py-2 text-start border border-gray-400">Dept</th>
              <th className="px-4 py-2 text-start border border-gray-400">Qualification</th>
              <th className="px-4 py-2 text-start border border-gray-400">Age</th>
              <th className="px-4 py-2 text-start border border-gray-400">Gender</th>
              <th className="px-4 py-2 text-start border border-gray-400">Specialist</th>
              <th className="px-4 py-2 text-start border border-gray-400">Number</th>
            </tr>
          </thead>

          <tbody>
            {doctorInfo.length > 0 ? (
              doctorInfo.map((doctor, index) => (
                <tr key={index} className=  "text-center hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{doctor.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{doctor.department}</td>
                  <td className="px-4 py-2 border border-gray-300">{doctor.qualification}</td>
                  <td className="px-4 py-2 border border-gray-300">{doctor.age}</td>
                  <td className="px-4 py-2 border border-gray-300">{doctor.gender}</td>
                  <td className="px-4 py-2 border border-gray-300">{doctor.specialist}</td>
                  <td className="px-4 py-2 border border-gray-300">{doctor.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center text-gray-500">
                  No doctors available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllDoctor;
