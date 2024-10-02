const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY; // Store securely in env

exports.isPatient = (req, res, next) => {
  // Get the token from the cookie
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.patient = decoded; // Attach user ID to the request object'
  
    
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

exports.isDoctor = (req, res, next) => {
  // Get the token from the cookie
  const token = req.cookies.doctortoken;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No DoctorToken provided.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.doctor = decoded; // Attach user ID to the request object
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid Admin token' });
  }
};


