import React from 'react';
import { useState,useEffect } from 'react';
import { FaUserDoctor } from "react-icons/fa6";
export default function DoctorInfo() {
    const [doctor, setdoctor] = useState({});
    useEffect(() => {
        const doctorData = localStorage.getItem("doctor");
    
        if (doctorData) {
          setdoctor(JSON.parse(doctorData));
        }
      }, []);
    
  return (
    <div className=' bg-white text-center w-full h-screen'>
       
       <div className="h-full  bg-white">
       
      <div className="flex justify-center p-4 text-black tracking-widest text-2xl border-b-8 mb-4">
      <FaUserDoctor  />
          Doctor Info
      </div>
      <div className="p-4 text-lg text-black tracking-wider">
        <table className="w-full">
          <tbody className=''>
            <tr className="border-b">
              <td className="p-2">Doctor ID:</td>
              <td className="p-2 text-right">{doctor.id}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Name:</td>
              <td className="p-2 text-right">{doctor.name}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Specialist:</td>
              <td className="p-2 text-right">{doctor.specialist}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Department</td>
              <td className="p-2 text-right">0{doctor.department}</td>
            </tr>
           
          </tbody>
        </table>
        
      </div>
    </div>
  );
      
    </div>
  )
}
