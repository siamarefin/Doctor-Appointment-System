require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const patientsRouter = require('./router/patientsRouter');
const doctorRouter = require('./router/DoctorRouter');


const app = express();
const PORT = 5000;




// CORS POLICY
const corsOptions ={
    origin:'http://localhost:3000', 
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,            
    optionSuccessStatus:200,
  }
app.use(cors(corsOptions));  


app.use(express.json());
app.use(cookieParser()); // Middleware to handle cookies


// Route
app.use('/patients', patientsRouter);
app.use('/doctor',doctorRouter);









app.get('/', (req, res) => {
 
      return res.status(200).send("Welcome to hms Server!");
 

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
