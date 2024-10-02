"use client";
import React, { useState } from "react";
import CreateAppointment from "@/component/Patient/CreateAppoinment2";
import MyAppointment from "@/component/Patient/MyAppointment";
import AllDoctor from "@/component/Patient/AllDoctor";
import MyReport from "@/component/Patient/MyReport";
import CabinRoomList from "@/component/Patient/CabinRoomList";
import WardRoomList from "@/component/Patient/WardRoomList";
import AvailableTest from "@/component/Patient/AvailableTest";
import Ambulance from "@/component/Patient/Ambulance";
import EmergencyContact from "@/component/Patient/EmergencyContact";
import AllNurse from "@/component/Patient/AllNurse";
import MyBill from "@/component/Patient/MyBill";
import MyPreviousHistory from "@/component/Patient/MyPreviousHistory";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import PatientInfo from "@/component/Patient/PatientInfo";

function Patient() {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const openDialog = () => setIsDialogOpen(true);
  // const closeDialog = () => setIsDialogOpen(false);

  const [activeComponent, setActiveComponent] = useState("");
  const [patient, setPatient] = useState({});
  const [Error, setError] = useState("");

  useEffect(() => {
    const patientData = localStorage.getItem("patient");

    if (patientData) {
      setPatient(JSON.parse(patientData));
    }
  }, []);

  const router = useRouter();
  // Check if session exists
  useEffect(() => {
    const patientsession = localStorage.getItem('patient');

    if (!patientsession)
    {
      // Redirect to profile if session exists
      router.push('/login');
    }
  }, [router]);

  const Handlelogout = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/logout`,
        {
          withCredentials: true, // Ensure cookies are sent and received
        }
      );

      if (response.status === 200) {
        // Remove patient data from localStorage
        localStorage.removeItem("patient");

        console.log("Logout successful:");

        // Redirect to  login
        router.push("/login");
      } else {
        setError(response.data.error || "Logout failed");
      }
    } catch (error) {
      console.error("Error in Logout:", error);
      setError("An error occurred during logout");
    }
  };

  return (
    <div className="h-full w-full flex space-x-2 bg-slate-500 ">
      <div className="w-1/5 flex flex-col h-full p-2  border-black space-y-2">
        <div className="h-auto bg-black flex justify-center items-center rounded-xl p-2 space-x-2">
          <h1 className="text-white font-bold text-2xl ">{patient.name}</h1>
         
        </div>
        <div className="flex flex-col h-0 flex-grow bg-yellow-300 rounded-xl justify-between ">
          <div className="flex justify-center underline items-center h-auto font-bold bg-black text-white rounded-t-xl px-4 py-2">
            Service name
          </div>
          <div className="bg-slate-700 flex-grow p-4 overflow-y-auto ">
            <button
              onClick={() => setActiveComponent("createAppointment")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Create Appointment
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("myAppointments")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-white hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My Appointments
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("allDoctors")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                All Doctors
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("myReport")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My Report
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("cabinRoomList")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Cabin Room List
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("wardRoomList")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ward Room List
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("availableTest")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Available Test
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("ambulance")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ambulance
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("emergencyContact")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Emergency Contact
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("allNurse")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                All Nurse
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("myBill")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My Bill
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("myPreviousHistory")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-black to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My Previous History
              </span>
            </button>
          </div>
          <div className="">
            <button
              onClick={Handlelogout}
              className="rounded-b-xl w-full px-4 py-2 bg-black text-white font-bold hover:bg-white hover:text-black"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="w-4/5 h-full  py-2 pr-2 space-y-2 flex flex-col">
        <div className="flex-shrink  rounded-xl p-2 text-2xl font-bold flex justify-center items-center">
         Patient Dashboard
        </div>

        <div className="flex-grow bg-white rounded-xl flex flex-col overflow-hidden">
        {activeComponent === "" && (
            <PatientInfo onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "createAppointment" && (
            <CreateAppointment onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "myAppointments" && (
            <MyAppointment onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "allDoctors" && (
            <AllDoctor onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "myReport" && (
            <MyReport onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "cabinRoomList" && (
            <CabinRoomList onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "wardRoomList" && (
            <WardRoomList onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "availableTest" && (
            <AvailableTest onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "ambulance" && (
            <Ambulance onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "emergencyContact" && (
            <EmergencyContact onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "allNurse" && (
            <AllNurse onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "myBill" && (
            <div className="flex-grow overflow-auto">
              <MyBill onClose={() => setActiveComponent("")} />
            </div>
          )}
          {activeComponent === "myPreviousHistory" && (
            <div className="flex-grow overflow-auto">
              <MyPreviousHistory onClose={() => setActiveComponent("")} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Patient;
