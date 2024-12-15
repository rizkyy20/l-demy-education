"use client"

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Logo from "@/app/Assets/Images/logo.png"

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async (e) => {
    try {
      const response = await axios.post('http://localhost:5000/users', {
        username,
        password
      });
      console.log('User register berhasil', response.data);
    } catch (error) {
      console.error('register gagal', error)
    }
  };
}



const Masuk = () => {
  return (
    <form className="flex justify-center h-screen items-center">
        <div className="border border-solid border-black rounded-xl p-12">
            <div className="flex justify-center mb-6 items-center mr-6">
              <Image src={Logo} alt="Logo" width={60} height={60} />
                <h1 className="font-bold text-2xl font-popin hover:text-kedua cursor-pointer">Login</h1>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        className="rounded-full px-4 py-2 border border-solid border-black"
                    />
                </div>
                <div className="flex">
                    <input
                        type="password"
                        placeholder="Password"
                        className="rounded-full px-4 py-2 border border-solid border-black"
                    />
                </div>
            </div>
            <div className="flex items-center ml-3 mt-2 mb-4">
                <input type="checkbox" className="h-3 w-3" />
                <label className="text-sm">Remember me?</label>
            </div>
            <div className="flex justify-center">
                <button className="bg-hover text-white font-semibold text-md font-popin hover:bg-blue-500 rounded-full px-4 py-1 w-submit">
                    Submit
                </button>
            </div>
            <div className="flex justify-center mt-3">
                <p className="text-sm">don't have account?</p>
                <a className="text-blue-500 text-sm underline cursor-pointer">Sign-up</a>
            </div>
        </div>
    </form>
  );
}


export default Masuk;