import React, { useState } from "react";
import { IoIceCreamOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.number || !userData.email || !userData.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
    navigate("/");
  };

  return (
    <div className="bg-white flex justify-center items-center w-full h-screen ">
      <div className="rounded-lg shadow-2xl text-lg bg-pink-100 w-[380px] sm:w-[500px] p-3 sm:p-6 space-y-3">
        <h1 className="font-bold text-3xl mb-5 flex items-center justify-center sm:text-2xl text-pink-600">
                  Puja's Ice<IoIceCreamOutline size={30} />Cream
                </h1>
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Enter your name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="px-3 py-1 bg-white rounded-md shadow focus:border-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Enter your number</label>
            <input
              type="number"
              name="number"
              value={userData.number}
              onChange={handleChange}
              placeholder="+91-"
              className="px-3 py-1 bg-white rounded-md shadow focus:border-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-3 py-1 bg-white rounded-md shadow focus:border-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Create password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              className="px-3 py-1 bg-white rounded-md shadow focus:border-none focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full bg-[#4778f6] rounded-sm p-2 text-white text-center font-semibold mt-5 cursor-pointer hover:bg-[#3164e4] transition-all">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-[#3a6be7]" to="/login">
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
