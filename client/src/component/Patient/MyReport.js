import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyReport() {
  const { myReports } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed border-collapse">
        <thead className=" text-black sticky top-0">
          <tr >
            <th className="border  px-4 py-2 text-start w-[40%]">Test Name</th>
            <th className="border px-4 py-2 text-start">Result</th>
            <th className="border px-4 py-2 text-start">Amount</th>
            <th className="border px-4 py-2 text-start">Comment</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {myReports.map((report, index) => (
            <tr key={index} className="text-black text-center">
              <td className="border px-4 py-2 text-start w-[40%] overflow-hidden whitespace-nowrap text-ellipsis">
                {report.test_name}
              </td>
              <td className="border px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                {report.result}
              </td>
              <td className="border px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                {report.amount}
              </td>
              <td className="border px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                {report.comment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyReport;
