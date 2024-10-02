"use client";
import React, { createContext, useContext,useEffect, useState } from "react";
import axios from "axios";

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {

  
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [myReports, setMyreports] = useState([]);
  const [cabinRoomList, setcabinRoomList] = useState([]);
  const [wardRoomList, setwardRoomList] = useState([]);
  const [availableTest, setavailableTest] = useState([]);
  const [ambulanceList, setambulanceList] = useState([]);
  const [emergencyContactList, setemergencyContactList] = useState([]);
  const [nurseInfo, setnurseInfo] = useState([]);
  const [myBillList, setmyBillList] = useState([]);
  const [myPreviousHistory, setmyPreviousHistory] = useState([]);

 
  // Fetching Doctor Info
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/alldoctor`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setDoctorInfo(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch doctors');
        }
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctors(); // Call the function inside useEffect
  }, []);


  // fetching my Appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/myappointment`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setAppointments(response.data.data); // Assuming response.data contains the appointment info array
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error fetching appointment data:', error);
       
      }
    };

    fetchAppointments(); // Call the function inside useEffect
  }, []);
  // console.log(appointments);
  

  // fetching my Reports
  useEffect(() => {
    const fetchMyreports = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/mytestreport`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setMyreports(response.data.data); // Assuming response.data contains the appointment info array
        } else {
          console.error('Failed to fetch Reports');
        }
      } catch (error) {
        console.error('Error fetching appointment data:', error);
       
      }
    };

    fetchMyreports(); // Call the function inside useEffect
  }, []);
   console.log(myReports);
  

// fetch all Avaiable Test

   useEffect(() => {
    const fetchavailableTest = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/availabletest`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setavailableTest(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch availableTest');
        }
      } catch (error) {
        console.error('Error fetching availableTest data:', error);
      }
    };

    fetchavailableTest(); // Call the function inside useEffect
  }, []);


// fetch all ward
   useEffect(() => {
    const fetchwardRoomList = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/allward`, {
          withCredentials: true, // Ensure cookies are sent and received
        });
        
        if (response.status === 200) {
          setwardRoomList(response.data.data); // Assuming response.data contains the doctor info array
        } else {
          console.error('Failed to fetch wardRoomList');
        }
      } catch (error) {
        console.error('Error fetching wardRoomList data:', error);
      }
    };

    fetchwardRoomList(); // Call the function inside useEffect
  }, []);

 
// fetch all cabin
useEffect(() => {
  const fetchCabinRoomList = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/allcabin`, {
        withCredentials: true, // Ensure cookies are sent and received
      });
      
      if (response.status === 200) {
        setcabinRoomList(response.data.data); // Assuming response.data contains the doctor info array
      } else {
        console.error('Failed to fetch CabinRoomList');
      }
    } catch (error) {
      console.error('Error fetching CabinRoomList data:', error);
    }
  };

  fetchCabinRoomList(); // Call the function inside useEffect
}, []);

//fetch all ambulance data

useEffect(() => {
  const fetchambulanceList = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/allambulance`, {
        withCredentials: true, // Ensure cookies are sent and received
      });
      
      if (response.status === 200) {
        setambulanceList(response.data.data); // Assuming response.data contains the doctor info array
      } else {
        console.error('Failed to fetch ambulanceList');
      }
    } catch (error) {
      console.error('Error fetching ambulanceList data:', error);
    }
  };

  fetchambulanceList(); // Call the function inside useEffect
}, []);

 //fetch all emergency contact

useEffect(() => {
  const fetchemergencyContactList = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/emergencycontact`, {
        withCredentials: true, // Ensure cookies are sent and received
      });
      
      if (response.status === 200) {
        setemergencyContactList(response.data.data); // Assuming response.data contains the doctor info array
      } else {
        console.error('Failed to fetch emergencyContactList');
      }
    } catch (error) {
      console.error('Error fetching emergencyContactList data:', error);
    }
  };

  fetchemergencyContactList(); // Call the function inside useEffect
}, []);

 
//fetch all emergency contact

useEffect(() => {
  const fetchnurseInfo = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/allnurse`, {
        withCredentials: true, // Ensure cookies are sent and received
      });
      
      if (response.status === 200) {
        setnurseInfo(response.data.data); // Assuming response.data contains the doctor info array
      } else {
        console.error('Failed to fetch nurseInfo');
      }
    } catch (error) {
      console.error('Error fetching nurseInfo data:', error);
    }
  };

  fetchnurseInfo(); // Call the function inside useEffect
}, []);

 
//fetch  myBillList

useEffect(() => {
  const fetchmyBillList = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/mybill`, {
        withCredentials: true, // Ensure cookies are sent and received
      });
      
      if (response.status === 200) {
        setmyBillList(response.data.data); // Assuming response.data contains the doctor info array
      } else {
        console.error('Failed to fetch myBillList');
      }
    } catch (error) {
      console.error('Error fetching myBillList data:', error);
    }
  };

  fetchmyBillList(); // Call the function inside useEffect
}, []);

 
//fetch  myPreviousHistory

useEffect(() => {
  const fetchPreviousHistory = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/myprevioushistory`, {
        withCredentials: true, // Ensure cookies are sent and received
      });
      
      if (response.status === 200) {
        setmyPreviousHistory(response.data.data); // Assuming response.data contains the doctor info array
      } else {
        console.error('Failed to fetch myPreviousHistory');
      }
    } catch (error) {
      console.error('Error fetching myPreviousHistory data:', error);
    }
  };

  fetchPreviousHistory(); // Call the function inside useEffect
}, []);
   

                                        // Doctor Page Data 


// console.log(previousHistory);


  return (
    <DataContext.Provider
      value={{
        appointments,
        doctorInfo,
        myReports,
        cabinRoomList,
        wardRoomList,
        availableTest,
        ambulanceList,
        emergencyContactList,
        nurseInfo,
        myBillList,
        myPreviousHistory,
     
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for consuming the data context
export const useDataContext = () => {
  return useContext(DataContext);
};
