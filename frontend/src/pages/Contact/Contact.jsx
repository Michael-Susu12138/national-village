import "./Contact.css";

import React, { useState, useRef } from "react";
import Alert from "../../components/Alert/Alert";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <>
      <Alert />
      <Nav />

      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-control mb-3"
          />
          <input
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            type="email"
            className="form-control mb-3"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="form-control mb-3"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-control mb-3"
            rows="5"
          />
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
