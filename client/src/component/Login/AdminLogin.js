import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function DoctorLogin() {
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  const [error, setError] = useState('');

  const router = useRouter();

  // Check if session exists
  useEffect(() => {
    const patientsession = localStorage.getItem('patient');
    const doctorsession = localStorage.getItem('doctor');

    if (patientsession && !doctorsession) {
      // Redirect to patient profile if session exists
      router.push('/patient');
    } else if (!patientsession && doctorsession) {
      // Redirect to doctor profile if session exists
      router.push('/doctor');
    }
  }, [router]);

  // console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(phone,password);
   
 
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctor/login`, {
        phone,
        password,
      }, {
        withCredentials: true, // Ensure cookies are sent and received
      });

      if (response.status === 200) {
        const { id, name, department, specialist } = response.data;

        // Save the patient data to localStorage
        localStorage.setItem('doctor', JSON.stringify({ id, name, department, specialist }));

        console.log('Login successful:');

        // Redirect to profile after successful login
        router.push('/doctor');
      } else {
        setError(response.data.error || 'Invalid phone or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid phone or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="Doctor-phone" className="block text-white tracking-wide">Doctor phone</label>
        <input
          type="text"
          id="Doctor-phone"
          className="w-full mt-2 p-2 border text-black border-black rounded-lg focus:border-2  focus:border-black"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Doctor-password" className="block text-white tracking-wide">password</label>
        <input
          type="password"
          id="Doctor-password"
          className="w-full mt-2 p-2 border text-black border-black rounded-lg focus:border-2  focus:border-black"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button type="submit" className="font-bold w-full bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black transition-colors tracking-wider">
        Sign in as Doctor
      </button>
    

      <p className="text-red mx-auto">{error}</p>
    </form>
  );
}
