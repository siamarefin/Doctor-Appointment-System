"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function PatientRegister() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
 const router = useRouter();
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/register`, {
       name,
        phone,
        age,
        gender,
        password,
      }, {
        withCredentials: true, // Ensure cookies are sent and received
      });

      if (response.status === 201) {
       

        console.log('Registration successful');
        alert("Registration successful");

        // Redirect to profile after successful login
        router.push('/login');
      } else {
        
      }
    } catch (error) {
      console.error('Error logging in:', error);
      
    }
    console.log("Patient Registration:", {
      name,
      phone,
      age,
      gender,
      password,
    });
  };

  return (
    <div className="text-white ">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="text-black w-full mt-1 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="text-black w-full mt-1 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex justify-between mb-2 w-full space-x-2">
          <div className="w-1/2">
            <label htmlFor="age" className="block text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="text-black w-full mt-1 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="gender" className="block text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              className="text-black w-full mt-1 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="text-black w-full mt-1 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="font-bold w-full bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black transition-colors tracking-wider"
        >
          Register as Patient
        </button>
        <div className="text-sm text-black text-center my-4 py-2">
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-white font-semibold hover:underline "
              onClick={() => router.push("/login")}
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
