import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google"; // Optional: If you want to implement Google login

const API_BASE_URL = "http://localhost:8000/api"; // Adjust if necessary

const AuthenticatorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      console.log("Login successful:", response.data);

      // Store token in localStorage (or cookies if needed)
      localStorage.setItem("token", response.data.token);

      // Redirect user to the dashboard or another protected page
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-opacity-70 bg-black p-8 rounded-xl shadow-lg w-96">
        {/* NASA Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
            alt="NASA Logo"
            className="w-24"
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <button onClick={handleForgotPasswordClick} className="hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition">
            Login
          </button>

          {/* Login with Google */}
          <button type="button" className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition">
            <img src="/image/google.png" alt="Google Logo" className="w-5 h-5" />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthenticatorLogin;
