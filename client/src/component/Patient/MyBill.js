import React from "react";
import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function MyBill() {
  const { myBillList } = useDataContext();

  // Function to format date strings
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Customize the locale and format if needed
  };

  return (
    <div className="table-container">
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Payment Status</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {myBillList.length > 0 ? (
              myBillList.map((bill, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{bill.bill_id}</td>
                  <td className="overflow-hidden">{formatDate(bill.date)}</td>
                  <td className="overflow-hidden">{bill.amount}</td>
                  <td className="overflow-hidden">{bill.description}</td>
                  <td className="overflow-hidden">{bill.paymentstatus}</td>
                  <td className="overflow-hidden">{bill.method}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No bills available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBill;
