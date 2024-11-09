import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function WardRoomList() {
  const { wardRoomList } = useDataContext();

  return (
    <div className="table-container">
      <div className="overflow-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Ward Name</th>
              <th>Room Number</th>
              <th>Assigned Nurse</th>
              <th>Supervising Doctor</th>
              <th>Case Summary</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {wardRoomList.length > 0 ? (
              wardRoomList.map((ward, index) => (
                <tr key={index} className="text-center hover:bg-blue-100">
                  <td className="overflow-hidden">{ward.name}</td>
                  <td className="overflow-hidden">{ward.bed_number}</td>
                  <td className="overflow-hidden">{ward.assigned_nurse}</td>
                  <td className="overflow-hidden">{ward.supervising_doctor}</td>
                  <td className="overflow-hidden">{ward.case_summary}</td>
                  <td className="overflow-hidden">{ward.bill}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No ward rooms available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WardRoomList;
