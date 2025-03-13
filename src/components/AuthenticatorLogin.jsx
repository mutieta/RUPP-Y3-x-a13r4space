import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const AuthenticatorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
    // Add authentication logic here
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password"); // Adjust the route as needed
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

          {/* Remember Me & Forgot Password (Same Line) */}
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
            <button
              onClick={handleForgotPasswordClick}
              className="hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition"
          >
            Login
          </button>

          {/* Login with Google */}
          <button
            type="button"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            <img src="/image/google.png" alt="Google Logo" className="w-5 h-5" />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthenticatorLogin;
