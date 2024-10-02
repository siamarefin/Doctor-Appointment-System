import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyPreviousHistory() {
  const { myPreviousHistory } = useDataContext();

    // Function to format date strings
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Customize the locale and format if needed
    };
  
  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <div className="overflow-y-auto">
        <table className="w-full table-auto">
          <thead className="sticky top-0 bg-gray-700 border text-black ">
            <tr>
              <th className="px-4 py-2 text-start border w-1/6">Date</th>
              <th className="px-4 py-2 text-start border w-1/6">Treatment</th>
              <th className="px-4 py-2 text-start border w-1/6">Doctor ID</th>
              <th className="px-4 py-2 text-start border w-1/6">Previous medicine</th>
              <th className="px-4 py-2 text-start border w-2/6">Case summary</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myPreviousHistory.map((history, index) => (
              <tr key={index} className="border text-black text-center">
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {formatDate(history.date_of_record)}
                </td>
                <td className="px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.treatment_given}
                </td>
                <td className="px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.doctor_id}
                </td>
                <td className="px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.previous_medicine}
                </td>
                <td className="px-4 py-2 text-start border  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.case_summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPreviousHistory;
