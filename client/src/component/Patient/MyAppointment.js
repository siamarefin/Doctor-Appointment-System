
import React from "react";
import { useDataContext } from "@/context/DataContext";
import { useEffect,useState } from "react";
import axios from "axios";

function MyAppointment() {
  const { appointments } = useDataContext();
  const [doctorNames, setDoctorNames] = useState({});

  // Function to fetch doctor name by ID
  const fetchDoctorName = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/patients/getdoctor/${id}`);
      if (response) {
        console.log("doctor name "+ response.data.data.name);
        return response.data.data.name;
 
        
      } else {
        console.error('Doctor not found');
        return '';
      }
    } catch (error) {
      console.error('Error fetching doctor data:', error);
      return '';
    }
  };

  // Load doctor names when the component mounts
  useEffect(() => {
    const loadDoctorNames = async () => {
      const names = {};
      for (const appointment of appointments) {
        if (appointment.doctor_id) {
          const name = await fetchDoctorName(appointment.doctor_id);
          names[appointment.doctor_id] = name;
        }
      }
      setDoctorNames(names);
    };

    loadDoctorNames();
  }, [appointments]);



  function formatDate(dateString) {
    const date = new Date(dateString);
    
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    
    // Return formatted date
    return `${year}-${month}-${day}`;
  }
  


  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
  <div className="overflow-auto flex-grow">
    <table className="w-full border border-collapse table-fixed bg-white text-black">
      <thead className="bg-gray-700 text-black sticky top-0">
        <tr>
          <th className="border px-4 py-2 text-start w-[30%]">Doctor Name</th>
          <th className="border px-4 py-2 text-start w-[25%]">Date</th>
          <th className="border px-4 py-2 text-start w-[20%]">Time</th>
          <th className="border px-4 py-2 text-start w-[20%]">Description</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2 text-start w-[30%] overflow-hidden whitespace-nowrap text-ellipsis">
              {doctorNames[appointment.doctor_id] || 'Loading...'}
            </td>
            <td className="border px-4 py-2 text-start w-[25%] overflow-hidden whitespace-nowrap text-ellipsis">
              {formatDate(appointment.date)}
            </td>
            <td className="border px-4 py-2 text-start w-[20%] overflow-hidden whitespace-nowrap text-ellipsis">
              {appointment.time}
            </td>
            <td className="border px-4 py-2 text-start w-[20%] overflow-hidden whitespace-nowrap text-ellipsis">
              {appointment.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default MyAppointment;
