"use client"
import React,{useState} from "react";
import { BiLogOut } from "react-icons/bi";
import { TbReportMedical } from "react-icons/tb";
import PreviousHistory from "@/component/Doctor/PreviousHistory"
import TestReport from "@/component/Doctor/TestReport"
import axios from "axios";
import { useRouter } from "next/navigation";
import DoctorInfo from "@/component/Doctor/DoctorInfo";

function Doctor() {
  const [activeComponent, setActiveComponent] = useState("");
  const [Error, setError] = useState("");
   const router = useRouter();
  const Handlelogout = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/doctor/logout`,
        {
          withCredentials: true, // Ensure cookies are sent and received
        }
      );

      if (response.status === 200) {
        // Remove patient data from localStorage
        localStorage.removeItem("doctor");

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
    <div className="bg-gray-300 h-screen flex p-0.5  rounded-xl">
      <div className="w-[20%] p-2 flex flex-col space-y-2 rounded-xl">
        <div className="flex flex-col  flex-grow border-2 border-white rounded-xl">
          <div className="text-white bg-slate-800 rounded-t-xl flex justify-center p-2 font-bold text-xl tracking-wider">
            <div className="flex justify-center items-center">
              <TbReportMedical className="mr-2 text-2xl" />
              <div>Patient Info</div>
            </div>
          </div>
          <div className="flex flex-grow justify-center bg-slate-300 p-2">
            <div className=" w-full space-y-2 rounded-xl">

              <button onClick={() => setActiveComponent("previousHistory")} class="relative w-full group inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-semibold text-base rounded-xl transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30">
                Previous History
                <svg
                  class="ml-2 -mr-1 w-4 h-4 stroke-white stroke-2"
                  fill="none"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <path
                    class="opacity-0 transition-opacity group-hover:opacity-100"
                    d="M0 5h7"
                  ></path>
                  <path
                    class="transition-transform group-hover:translate-x-[3px]"
                    d="M1 1l4 4-4 4"
                  ></path>
                </svg>
              </button>
              <button onClick={() => setActiveComponent("testReport")} class="relative w-full group inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-semibold text-base rounded-xl transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30">
                Test Report
                <svg
                  class="ml-2 -mr-1 w-4 h-4 stroke-white stroke-2"
                  fill="none"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <path
                    class="opacity-0 transition-opacity group-hover:opacity-100"
                    d="M0 5h7"
                  ></path>
                  <path
                    class="transition-transform group-hover:translate-x-[3px]"
                    d="M1 1l4 4-4 4"
                  ></path>
                </svg>
              </button>

            </div>
          </div>
          <button onClick={Handlelogout} className="text-white bg-slate-800 hover:bg-white hover:text-black rounded-b-xl flex justify-center p-2 font-bold text-xl tracking-wider">
            <div className="flex justify-center items-center">
              <BiLogOut className="mr-2 text-2xl" />
              <div>Logout</div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[80%]  p-2 pl-0 flex flex-col space-y-2 rounded-xl">
      
        <div className=" flex-grow border-b-2 border-black overflow-hidden h-full rounded-xl">
        {activeComponent === "" && (
            <DoctorInfo onClose={() => setActiveComponent("")} />
          )}
        {activeComponent === "previousHistory" && (
            <PreviousHistory onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "testReport" && (
            <TestReport onClose={() => setActiveComponent("")} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctor;