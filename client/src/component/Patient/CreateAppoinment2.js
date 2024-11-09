"use client";
import { useDataContext } from "@/context/DataContext";
import axios from "axios";
import { useState } from "react";

const CreateAppointmentForm = () => {
  const [doctor_id, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const { doctorInfo } = useDataContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctor_id || !date || !time || !description) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/createappointment`,
        {
          doctor_id,
          date,
          time,
          description,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        alert("Appointment Created Successfully");
        setDoctorId("");
        setDate("");
        setTime("");
        setDescription("");
      } else {
        console.error("Failed to create appointment");
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Failed to create appointment. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="shadow-lg border rounded-lg p-8 w-full max-w-md bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 border-b pb-2">
          Create Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Doctor Select Input */}
          <div className="mb-4">
            <label htmlFor="doctor" className="block text-gray-700 mb-1">
              Doctor Name
            </label>
            <select
              id="doctor"
              value={doctor_id}
              onChange={(e) => setDoctorId(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select a Doctor
              </option>
              {doctorInfo &&
                doctorInfo.map((doctor, index) => (
                  <option key={index} value={doctor.doctor_id}>
                    {doctor.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Time Input */}
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 mb-1">
              Select a Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Enter appointment details or description"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex w-full">
            <button
              type="submit"
              className="bg-blue-500 font-bold w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
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
