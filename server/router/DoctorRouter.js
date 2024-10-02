const express = require('express');
const doctorRouter = express.Router();
const {  login, logout, getAllPatientHistory, getAllPatientReport} = require('../controller/doctorController');
const { isDoctor } = require('../auth/auth');






// Login Route
doctorRouter.post('/login', login);

// Logout Route
doctorRouter.get('/logout',isDoctor, logout);


 
                                  //==== Services ====
// gell all Patient previous_history
doctorRouter.get('/patienthistory',isDoctor, getAllPatientHistory);
// gell all Patient testreport
doctorRouter.get('/patienttestreport',isDoctor, getAllPatientReport);                          


module.exports = doctorRouter;