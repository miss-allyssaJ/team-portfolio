import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2ol2nq4",  
        "template_j1pjhs7", 
        e.target,
        "h0_AGJ-ydwwnR7Zdw"      
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("There was an error submitting your form.");
        }
      );
  };

  return (
    <div className="text-center py-14 px-6 sm:px-8 md:px-12 lg:px-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Contact Us</h2>
      <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
        Feel free to reach out to us via the form below.
      </p>
      
      <div className="mt-6 max-w-md mx-auto w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-black transition w-full sm:px-8"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;