import RevealOnScroll from "../RevealOnScroll";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import BackButton from '../BackButton';

export const Login = () => {

    const navigate = useNavigate();
    const { setIsLoggedIn , setUserName, setUserRole } = useAuth();

    const [formData, setFormData] = useState({
    userName: "",
    password: ""
    });

    const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
      const res = await fetch("https://portfolio-backend-3zgg.onrender.com/v1/signIn", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
               userName: formData.userName,
               password: formData.password
        })
      });

      const data = await res.json();
      
      if (res.ok) {
        setFormData({ userName: "", password: "" });
        document.getElementById("Login").textContent = `Welcome`;
        setIsLoggedIn(true);
        setUserName(data.userName);
        setUserRole(data.role || null);
        navigate('/');
      } else {
        document.getElementById("Login").textContent = `Invalid Credentials`
      }
    } catch (err) {
      document.getElementById("Login").textContent = `Invalid Credentials`
      console.error(err);
      alert("Server error.");
    }
     };

    return <section className="min-h-screen px-4 flex flex-col">

  <div className="flex flex-col justify-center flex-grow">
    <div className="w-full max-w-3xl mx-auto">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Log In
        </h2>

        <p id="Login" className="text-center text-gray-400 text-lg md:text-2xl font-bold mb-8 my-8"></p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="userName"
              name="userName"
              required
              value={formData.userName}
              onChange={handleChange}
              placeholder="User Name"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg"
          >
            Log In
          </button>
        </form>
      </RevealOnScroll>
    </div>
  </div>

  <div className="mt-auto w-full pl-4 pb-4">
    <BackButton />
  </div>
</section>


}