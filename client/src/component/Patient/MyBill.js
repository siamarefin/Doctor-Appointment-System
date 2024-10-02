import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyBill() {
  const { myBillList } = useDataContext();

  // Function to format date strings
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Customize the locale and format if needed
  };

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <div className="overflow-y-auto">
        <table className="w-full table-auto border-collapse border ">
          <thead className="sticky top-0 bg-gray-700 text-black">
            <tr>
              <th className="px-4 py-2 text-start w-1/6 border ">Bill ID</th>
              <th className="px-4 py-2 text-start w-1/6 border ">Date</th>
              <th className="px-4 py-2 text-start w-1/6 border ">Amount</th>
              <th className="px-4 py-2 text-start w-2/6 border ">Description</th>
              <th className="px-4 py-2 text-start w-1/6 border ">Payment Status</th>
              <th className="px-4 py-2 text-start w-1/6 border ">Method</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myBillList.map((bill, index) => (
              <tr key={index} className="border-b border text-center text-black">
                <td className="px-4 py-2 text-start  border  overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.bill_id}
                </td>
                <td className="px-4 py-2 text-start  border overflow-hidden whitespace-nowrap text-ellipsis">
                  {formatDate(bill.date)}
                </td>
                <td className="px-4 py-2 text-start border overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.amount}
                </td>
                <td className="px-4 py-2 text-start border overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.description}
                </td>
                <td className="px-4 py-2 text-start border overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.paymentstatus}
                </td>
                <td className="px-4 py-2 text-start border overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBill;
