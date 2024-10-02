require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../db/db'); // Database connection
const jwt = require('jsonwebtoken');

// user Registration

exports.register = async (req, res) => {
  const { name, phone, age, password } = req.body;

  // Check if the phone number already exists
  const checkPhoneSql = `SELECT * FROM patients WHERE phone = ?`;
  db.query(checkPhoneSql, [phone], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    // If phone number already exists
    if (result.length > 0) {
      return res.status(400).json({ error: 'Phone number already registered' });
    }

    // If phone number is not in the database, proceed with registration
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const sql = `INSERT INTO patients (name, phone, age, password) VALUES (?, ?, ?, ?)`;
      db.query(sql, [name, phone, age, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Error during registration' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
      });
    } catch (error) {
      return res.status(500).json({ error: 'Error hashing password' });
    }
  });
};

// user Login


exports.login = (req, res) => {
    const { phone, password } = req.body;
  
    const sql = `SELECT * FROM patients WHERE phone = ?`;
    db.query(sql, [phone], async (err, result) => {
      if (err || result.length === 0) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const user = result[0];
      const validPassword = await bcrypt.compare(password, user.password);
  
      if (!validPassword) {
        return res.status(400).json({ error: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user.patient_id }, process.env.SECRET_KEY, { expiresIn: '1h' });
      
      // Send token as a cookie
      res.cookie('token', token, {
        httpOnly: true, // Prevent client-side access to the cookie
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 7 * 24 * 60 * 60 * 1000 
      });
  
      res.status(200).json({ message: 'Login successful' ,
        id:user.patient_id,
        name : user.name,
        phone :user.phone,
        age : user.age,
       });
    });
  };

// Logout
  exports.logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
  };
  

                                                // ===== Services=====

// get all Doctors
exports.getAllDoctors = (req, res) => {
  const sql = 'SELECT doctor_id, name, phone, age, department, qualification, gender, specialist FROM doctor';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'Doctors retrieved successfully',
      data: results
    });
  });
};

// make a appointment
exports.createAppointment = (req, res) => {
  const { doctor_id, time,date,description } = req.body;
 const patient_id = req.patient.id;

 
  // Validate input
  if (!doctor_id || !patient_id || !time ||!date||!description) {
    return res.status(400).json({ error: 'Doctor ID, Patient ID,date,description and time are required' });
  }

  const sql = 'INSERT INTO appointment (doctor_id, patient_id, time, date, description) VALUES (?,?,?,?,?)';

  db.query(sql, [doctor_id, patient_id, time,date,description], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating appointment' });
    }

    res.status(201).json({
      message: 'Appointment created successfully!',
      appointment_id: result.insertId
    });
  });
};


// My Appointments history
exports.getAppointmentsByPatientId = (req, res) => {
  const  patient_id  = req.patient.id;

  // Validate if patient_id is provided
  if (!patient_id) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  const sql = 'SELECT * FROM appointment WHERE patient_id = ?';

  db.query(sql, [patient_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No appointments found for this patient' });
    }

    res.status(200).json({
      message: 'Appointments retrieved successfully',
      data: results
    });
  });
};

// get Doctor by Id
exports.getDoctorById = (req, res) => {
  const { doctor_id } = req.params;

  // Validate if doctor_id is provided
  if (!doctor_id) {
    return res.status(400).json({ error: 'Doctor ID is required' });
  }

  const sql = 'SELECT doctor_id, name, phone, age, department, qualification, gender, specialist FROM doctor WHERE doctor_id = ?';

  db.query(sql, [doctor_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({
      message: 'Doctor retrieved successfully',
      data: result[0]
    });
  });
};

// get My test report by patient Id

exports.getTestReportByPatientId = (req, res) => {
  const  patient_id  = req.patient.id;

  // Validate if patient_id is provided
  if (!patient_id) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  const sql = 'SELECT * FROM testreport WHERE patient_id = ?';

  db.query(sql, [patient_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No testreport found for this patient' });
    }

    res.status(200).json({
      message: 'testreport retrieved successfully',
      data: results
    });
  });
};


// get my bill bt patient Id

exports.getTestBillByPatientId = (req, res) => {
  const  patient_id  = req.patient.id;

  // Validate if patient_id is provided
  if (!patient_id) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  const sql = 'SELECT * FROM bill WHERE patient_id = ?';

  db.query(sql, [patient_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No bill found for this patient' });
    }

    res.status(200).json({
      message: 'bill retrieved successfully',
      data: results
    });
  });
};


// get all Cabin Room
exports.getAllCabinRoom = (req, res) => {
  const sql = 'SELECT * FROM cabin_room';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'Cabin Room retrieved successfully',
      data: results
    });
  });
};
// get all ambulance Room
exports.getAmbulance = (req, res) => {
  const sql = 'SELECT * FROM ambulance';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'Ambulance retrieved successfully',
      data: results
    });
  });
};

// get all ambulance Room
exports.getAllWard = (req, res) => {
  const sql = 'SELECT * FROM general_ward';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'General Ward retrieved successfully',
      data: results
    });
  });
};


// get all available test 
exports.getAvailableTest = (req, res) => {
  const sql = 'SELECT * FROM availabletest';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'available test retrieved successfully',
      data: results
    });
  });
};

// get all emergency_contact
exports.getEmergencyContact = (req, res) => {
  const sql = 'SELECT * FROM emergency_contact';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'emergency contact retrieved successfully',
      data: results
    });
  });
};

// get all Nurse
exports.getAllNurse = (req, res) => {
  const sql = 'SELECT * FROM nurse';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'nurse retrieved successfully',
      data: results
    });
  });
};


// get my Previous History by patient Id

exports.getPreviousHistoryByPatientId = (req, res) => {
  const  patient_id  = req.patient.id;

  // Validate if patient_id is provided
  if (!patient_id) {
    return res.status(400).json({ error: 'Patient ID is required' });
  }

  const sql = 'SELECT * FROM previous_history WHERE patient_id = ?';

  db.query(sql, [patient_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No previous_history found for this patient' });
    }

    res.status(200).json({
      message: 'previous_history retrieved successfully',
      data: results
    });
  });
};

