require('dotenv').config();
const db = require('../db/db'); // Database connection
const jwt = require('jsonwebtoken');



// Doctor Login

exports.login = async (req, res) => {
  const { phone, password } = req.body;

  const sql = `SELECT * FROM doctor WHERE phone = ?`;
  db.query(sql, [phone], async (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).json({ error: 'Doctor not found' });
    }

    const doctor = result[0];


    if (!(password === doctor.password)) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: doctor.doctor_id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    // Send token as a cookie
    res.cookie('doctortoken', token, {
      httpOnly: true, // Prevent client-side access to the cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 7 * 24 * 60 * 60 * 1000 , // 7 day
    });

    res.status(200).json({ 
      message: 'Login successful',
      id: doctor.doctor_id,
      name : doctor.name,
      department : doctor.department,
      specialist : doctor.specialist
     });
  });
};

// Doctor Logout

exports.logout = (req, res) => {
  res.clearCookie('doctortoken');
  res.status(200).json({ message: 'Logout successful' });
};

// ===== Doctor Services =====
// get all Patient History
exports.getAllPatientHistory = (req, res) => {
  const sql = 'SELECT * FROM previous_history';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'previous_history retrieved successfully',
      data: results
    });
  });
};

// get all Patient report
exports.getAllPatientReport = (req, res) => {
  const sql = 'SELECT * FROM testreport';
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json({
      message: 'test report retrieved successfully',
      data: results
    });
  });
};