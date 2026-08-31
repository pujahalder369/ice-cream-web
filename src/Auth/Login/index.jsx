import React, { useState } from "react";
import { IoIceCreamOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate('/', { replace: true })
    }
  };

  return (
    <div className="bg-white flex justify-center items-center w-full h-screen ">
      <div className="rounded-lg shadow-2xl text-lg bg-pink-100 w-[380px] sm:w-[500px] p-3 sm:p-6 space-y-3">
        <h1 className="font-bold text-3xl mb-5 flex items-center justify-center sm:text-2xl text-pink-600">
          Puja's Ice<IoIceCreamOutline size={30} />Cream
        </h1>
        <form onSubmit={handleLogIn}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Enter Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-1 bg-white rounded-md shadow focus:border-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-1 bg-white rounded-md shadow focus:border-none focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full bg-[#4778f6] rounded-sm p-2 text-white text-center font-semibold mt-5 cursor-pointer hover:bg-[#3164e4] transition-all">
            Login
          </button>
        </form>
        <p>
          <Link
            to={"/sign-up"}
            className="hover:text-[#3a6be7] transition-all duration-300"
          >
            Create new account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
