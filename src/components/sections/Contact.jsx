import RevealOnScroll from "../RevealOnScroll";
import { useState } from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: ""
    });

    const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("thankYou").textContent = `Thank you ${formData.name}, we will be in touch.`

    try {
      const res = await fetch("https://portfolio-backend-3zgg.onrender.com/customer/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", phoneNumber: "", description: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
     };

    return <section id="contact" className="min-h-screen flex items-center py-20"
    >
    <div className="px-4  w-full max-w-3xl mx-auto">
    <RevealOnScroll>
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
     Get In Touch </h2>

     <div>
      <p id="thankYou" className="text-center text-gray-400 text-lg md:text-2xl font-bold mb-8 my-8">
      </p>
     </div>

     <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Name..." className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
        </div>

        <div className="relative">
            <input type="text" id="phoneNumber" name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} placeholder="555-123-4567" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
        </div>

        <div className="relative">
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Example@email.com" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
        </div>

        <div className="relative">
            <textarea id="description" name="description" required value={formData.description} onChange={handleChange} maxLength={200} rows={5} placeholder="Your Short Message..." className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
             {/* Character Counter */}
              <div className="text-right text-sm text-gray-400 mt-1">
                {formData.description.length} / 200
              </div>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Contact
        </button>

     </form>
    </RevealOnScroll>
    </div>
    </section>
}