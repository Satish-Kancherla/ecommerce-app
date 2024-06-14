"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', data);
      const email = response.data.email;
      console.log(email);      
      login(email);
      router.push('/dashboard');
    } catch (error) {
      setError('Login Failed');
      console.error('Login Failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 ">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-4">
            Welcome back! Please enter your details
          </span>
          {error && <span className="text-red-500 mb-4">{error}</span>}
          <div className="py-2">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleInputs}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputs}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-5 bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border
           hover:border-gray-300 disabled:bg-gray-300 disabled:text-black"
            onClick={handleLogin}
          >
            Submit
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <span className="font-bold text-black ml-2 hover:underline">
              <Link href="/signin">Sign up for free</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
