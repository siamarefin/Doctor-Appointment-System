import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyBill() {
  const { myBillList } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <div className="overflow-y-auto">
        <table className="w-full table-auto">
          <thead className="sticky top-0 bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 text-start w-1/6">Bill_ID</th>
              <th className="px-4 py-2 text-start w-1/6">Date</th>
              <th className="px-4 py-2 text-start w-1/6">Amount</th>
              <th className="px-4 py-2 text-start w-2/6">Description</th>
              <th className="px-4 py-2 text-start w-1/6">Payment Status</th>
              <th className="px-4 py-2 text-start w-1/6">Method</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myBillList.map((bill, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">{bill.bill_ID}</td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">{bill.date}</td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">{bill.amount}</td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">{bill.description}</td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">{bill.payment_Status}</td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">{bill.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBill;
