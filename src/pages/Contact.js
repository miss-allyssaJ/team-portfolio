import React from "react";

const Contact = () => (
  <div className="text-center py-14 px-6">
    <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
    <p className="mt-4 text-gray-600">Feel free to reach out to us via the form below.</p>

    {/* Contact Form */}
    <div className="mt-6 max-w-md mx-auto">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>
        <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-black transition">
          Send Message
        </button>
      </form>
    </div>

  </div>
);

export default Contact;
