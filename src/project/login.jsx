import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const actualData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (actualData.email && actualData.password) {
      // Retrieve existing values from local storage
      const existingEmail = localStorage.getItem("Email") || "";
      const existingPassword = localStorage.getItem("Password") || "";

      // Combine existing values with new values
      const updatedEmail = existingEmail
        ? `${existingEmail}, ${actualData.email}`
        : actualData.email;
      const updatedPassword = existingPassword
        ? `${existingPassword}, ${actualData.password}`
        : actualData.password;

      // Update state and show success message
      setEmail(""); // Clear email input
      setPassword(""); // Clear password input
      setSuccessMessage("Login successful!");

      // Store updated values in local storage
      localStorage.setItem("Email", updatedEmail);
      localStorage.setItem("Password", updatedPassword);

      // Reset success message after a delay (e.g., 2000 milliseconds)
    } else {
      // Clear any previous success messages and show error message
      setSuccessMessage("");
      setErrorMessage("Please fill in all fields.");
    }
  };

  return (
    <div
      className="flex h-screen items-center justify-center   backdrop-blur-lg"
   
    >
      <div className="bg-[#202124] p-8 rounded-[50px] shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-[white]">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500 mb-4">{successMessage}</div>
          )}
          <button
            className="bg-blue-500 text-white p-2 rounded-[10px] hover:bg-blue-600 mt-[10px]"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center ml-[280px] p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="white"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;