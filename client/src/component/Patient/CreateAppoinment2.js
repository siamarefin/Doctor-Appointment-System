"use client";
import React, { useState,useContext} from "react";
import { useDataContext } from "@/context/DataContext";
import axios from "axios";


const CreateAppointmentForm = () => {
  const [doctor_id, setdoctor_id] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [description, setDescription] = useState("");
const { doctorInfo } = useDataContext(useDataContext);
 



const handleSubmit = async(e) => {
    e.preventDefault();
   
      try { 
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/createappointment`,
          {
           doctor_id,
           date,
           time,
           description
          } ,
          {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 201) {
         console.log('Appointment Created');
         alert("Apointment Created Successfully")
         

        } else {
          console.error('Failed to creation appointments');
          
        }

      } catch (error) {
        console.error('Error creation appointment data:', error);
       
      }

   





    console.log({
      doctor_id,
      date,
      time,
      description,
    });
  };



  return (
    <div className=" flex items-center justify-center h-full">
      <div className="shadow-lg border-2 rounded-3xl p-6 w-3/5 max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-black border-b-2 tracking-widest">
          Create Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="doctor" className="block text-black tracking-wide">
              Doctor Name
            </label>
  <select
  id="doctor"
  value={doctor_id}
  onChange={(e) => setdoctor_id(e.target.value)}
  className="w-full text-black px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
  required
>
  <option value="" disabled>
    Select a Doctor
  </option>
  {doctorInfo.map((doctor, index) => (
    <option key={index} value={doctor.doctor_id}>
      {doctor.name}
    </option>
  ))}
</select>

          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-black tracking-wide">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-black tracking-wide">
              Select a Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => settime(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-black tracking-wide">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Enter appointment details or description"
              required
            />
          </div>

          <div className="flex w-full">
            
            <button
              type="submit"
              className="bg-black border font-bold tracking-wider w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointmentForm;
