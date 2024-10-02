import React from "react";
import { useDataContext } from "@/context/DataContext";

function AllNurse() {
  const { nurseInfo } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
  <div className="overflow-auto flex-grow">
    <table className="w-full bg-white table-fixed border-collapse border ">
      <thead className=" text-black sticky top-0">
        <tr>
          <th className="px-4 py-2 text-start border ">Name</th>
          <th className="px-4 py-2 text-start border ">Gender</th>
          <th className="px-4 py-2 text-start border ">Allocation</th>
          <th className="px-4 py-2 text-start border ">Address</th>
          <th className="px-4 py-2 text-start border ">Number</th>
        </tr>
      </thead>
      <tbody>
        {nurseInfo.map((doctor, index) => (
          <tr key={index} className="text-black text-center">
            <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
              {doctor.name}
            </td>
            <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
              {doctor.gender}
            </td>
            <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
              {doctor.allocation}
            </td>
            <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
              {doctor.address}
            </td>
            <td className="border-b-2 px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
              {doctor.phone}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default AllNurse;
