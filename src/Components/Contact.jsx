import React, { useState } from "react";
import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init("LRXs4dXmCf3i7puYn"); // Replace with your public key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zerpk88",
        "template_fjyn0rb",
        formData,
        "LRXs4dXmCf3i7puYn"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send message. Error: ", err);
        alert("Failed to send message, please try again later.");
      });
  };

  return (
    <div className="mt-10 lg:mt-0 lg:col-span-2">
      <h3 className="text-xl font-bold text-white">Get in Touch</h3>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring-titleGreen focus:border-titleGreen"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring-titleGreen focus:border-titleGreen"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:ring-titleGreen focus:border-titleGreen"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-sm font-medium text-footerGreen bg-buttonGreen rounded-md hover:bg-buttonOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-titleGreen"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
