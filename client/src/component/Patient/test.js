"use client";
import { useState } from "react";

export default function Dialog({ isOpen, closeDialog }) {
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor:", doctorName);
    console.log("Date:", appointmentDate);
    closeDialog();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={closeDialog}
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm bg-white border-2 border-black"
      >
        <div className="relative flex flex-col">
          {/* Header */}
          <div
            className="m-2.5 flex justify-center items-center text-white h-24 rounded-md"
            style={{ backgroundColor: "#075E54" }}
          >
            <h3 className="text-2xl">Create Appointment</h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 ">
            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-800">
                Doctor name
              </label>
              <select
                id="doctorName"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option value="" disabled>
                  Select doctor
                </option>
                <option value="Dr. Robin">Dr. Robin</option>
                <option value="Dr. Ferzin">Dr. Ferzin</option>
                <option value="Dr. Rakib">Dr. Rakib</option>
                <option value="Dr. Rina">Dr. Rina</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-800">Date</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 shadow-sm"
              />
            </div>

            <div className="pt-0 flex space-x-2 mt-4">
              <button
                type="button"
                onClick={closeDialog}
                className="flex-1 border border-black font-semibold tracking-wider w-full rounded-md py-2 text-white shadow-md hover:bg-slate-700 focus:bg-slate-700"
                style={{ backgroundColor: "#075E54" }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 border border-black font-semibold tracking-wider w-full rounded-md py-2 text-white shadow-md hover:bg-slate-700 focus:bg-slate-700"
                style={{ backgroundColor: "#075E54" }}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
