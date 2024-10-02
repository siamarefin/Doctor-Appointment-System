const express = require('express');
const { register, login, logout, getAllDoctors, createAppointment, getAppointmentsByPatientId, getDoctorById, getTestReportByPatientId, getAllCabinRoom, getAmbulance, getAllWard, getAvailableTest, getEmergencyContact, getAllNurse, getPreviousHistoryByPatientId, getTestBillByPatientId} = require('../controller/patientsController');
const patientsRouter = express.Router();
const {isPatient} =  require('../auth/auth')

// Register Route
patientsRouter.post('/register', register);

// Login Route
patientsRouter.post('/login', login);

// Logout Route
patientsRouter.get('/logout',isPatient, logout);
                                //  ====== SERVICES ==========
// Make Appointment Route
patientsRouter.post('/createappointment',isPatient,createAppointment );
// My all appointments
patientsRouter.get('/myappointment',isPatient,getAppointmentsByPatientId );
// get all doctor
 patientsRouter.get('/alldoctor',isPatient, getAllDoctors);
//  get Doctor By Id
patientsRouter.get('/getdoctor/:doctor_id', getDoctorById);
//get All report by patient id
patientsRouter.get('/mytestreport',isPatient,getTestReportByPatientId );
//get my bill by patient id
patientsRouter.get('/mybill',isPatient,getTestBillByPatientId );
//get all cabin room 
patientsRouter.get('/allcabin',isPatient,getAllCabinRoom );
//get all ambulance
patientsRouter.get('/allambulance',isPatient,getAmbulance );
//get all ward
patientsRouter.get('/allward',isPatient,getAllWard );
//get all available test
patientsRouter.get('/availabletest',isPatient,getAvailableTest );
//get all emergency contact
patientsRouter.get('/emergencycontact',isPatient,getEmergencyContact );
//get all emergency contact
patientsRouter.get('/allnurse',isPatient,getAllNurse );
//get my previous History 
patientsRouter.get('/myprevioushistory',isPatient,getPreviousHistoryByPatientId );



module.exports = patientsRouter;
