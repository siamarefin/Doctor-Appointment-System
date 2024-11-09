import React, { useEffect, useState } from "react";
import { useDataContext } from "@/context/DataContext";
import axios from "axios";
import "./style.css"; // Import the general table styles if needed

function MyAppointment() {
  const { appointments } = useDataContext();
  const [doctorNames, setDoctorNames] = useState({});

  // Function to fetch doctor name by ID
  const fetchDoctorName = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/patients/getdoctor/${id}`);
      if (response) {
        console.log("doctor name " + response.data.data.name);
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
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="table-container">
      <div className="overflow-y-auto flex-grow">
        <table className="table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="text-center hover:bg-blue-100">
                <td className="overflow-hidden">{doctorNames[appointment.doctor_id] || 'Loading...'}</td>
                <td className="overflow-hidden">{formatDate(appointment.date)}</td>
                <td className="overflow-hidden">{appointment.time}</td>
                <td className="overflow-hidden">{appointment.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
