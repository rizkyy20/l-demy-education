"use client";

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/users', {
        username,
        password
      });
      console.log('User register berhasil', response.data);
    } catch (error) {
      console.error('Register gagal', error);
    }
  };

  return (
    <form className="flex justify-center h-screen items-center" onSubmit={handleRegister}>
      <div className="border border-solid border-black rounded-xl p-12">
        <div className="flex justify-center mb-6">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-full px-4 py-2 border border-solid border-black"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-full px-4 py-2 border border-solid border-black"
            />
          </div>
        </div>
        <div className="flex items-center ml-3 mt-2 mb-4">
          <input type="checkbox" className="h-3 w-3" />
          <label className="text-sm ml-2">Remember me?</label>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-500 rounded-full px-4 py-1">
            Submit
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-sm">Don't have an account?</p>
          <a href="#" className="text-blue-500 text-sm ml-1">Sign-up</a>
        </div>
      </div>
    </form>
  );
};

export default Register;
