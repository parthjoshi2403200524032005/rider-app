import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../image/pexels-logan-rhoads-8256772.jpg";

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
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="flex">
        <div
          className="bg-no-repeat bg-cover h-[600px] w-[600px] rounded-l-lg "
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="bg-[#202124] p-8 shadow-md w-96 rounded-r-lg ">
          <h1 className="text-3xl font-bold mb-6 text-white">Login</h1>
          <form
            onSubmit={handleLogin}
            className="transition-transform duration-500 transform hover:scale-[0.96]"
          >
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
            <div className="w-[300px] bg-blue-500 text-white p-[10px] rounded-[10px] hover:bg-blue-600 mt-[50px] flex  justify-center gap-[10px] ml-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
             <h1 className="font-bold"> Login With Facebook</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
