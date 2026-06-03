import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", {
        phone,
        password,
      });

      // 🔐 Save token
      localStorage.setItem("token", res.data.token);

      // success message
      alert("Login Success ✅");

      // redirect to dashboard
      navigate("/dashboard");

    } catch (error) {

      console.log("Login Error:", error.response?.data || error.message);

      alert("Login Failed ❌");

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-[#0B1120] px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-slate-900 p-10 rounded-3xl border border-slate-700"
      >

        <h2 className="text-3xl text-white font-bold mb-8 text-center">
          Admin Login
        </h2>

        {/* PHONE */}
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none mb-5"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none mb-6"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-cyan-500 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default AdminLogin;