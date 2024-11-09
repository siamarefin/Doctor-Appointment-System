import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function AvailableTest() {
  const { availableTest } = useDataContext();

  return (
    <div className="table-container">
      <div className="overflow-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Amount</th>
              <th>Available Time</th>
            </tr>
          </thead>
          <tbody>
            {availableTest.length > 0 ? (
              availableTest.map((test, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{test.test_name}</td>
                  <td className="overflow-hidden">{test.amount}</td>
                  <td className="overflow-hidden">{test.available_time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data">
                  No tests available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AvailableTest;
