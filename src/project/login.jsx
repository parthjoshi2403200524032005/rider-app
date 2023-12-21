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
    } else {
      // Clear any previous success messages and show error message
      setSuccessMessage("");
      setErrorMessage("Please fill in all fields.");
    }
  };

  
  return (
    <div className="flex h-screen items-center justify-center bg-white">
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
            className="bg-blue-500 text-white p-2 rounded-[10px] hover:bg-blue-600"
            type="submit"
            onClick={()=>navigate("/")}   
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
