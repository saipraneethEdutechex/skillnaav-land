"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    if (form.current) {
      emailjs
        .sendForm(
          "service_tiht6uh",
          "template_3j9le27",
          form.current,
          "5x1CeJLgs4FGVEqur"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSubmitted(true);
            setError(null);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setError("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div
      id="contacts"
      className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg overflow-hidden shadow-lg my-16"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 py-10 px-8 lg:p-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6 text-center">
            Have Questions? Get in Touch
          </h1>
          <p className="text-white text-lg mb-6 text-center">
            <br />
            <a
              href="mailto:info@skillnaav.com"
              className="text-white font-medium"
            >
             info@skillnaav.com
            </a>
          </p>
        </div>

        {/* Right Section */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 py-10 px-8 lg:p-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
        >
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-8 text-center">
            Contact Us
          </h2>
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Name*"
            className="w-full py-3 px-4 bg-white rounded-md text-lg text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            name="from_email"
            type="email"
            placeholder="Enter Your Email*"
            className="w-full py-3 px-4 bg-white rounded-md text-lg text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            name="from_qsns"
            type="text"
            placeholder="Your Question About.."
            className="w-full py-3 px-4 bg-white rounded-md text-lg text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            className="w-full py-3 px-4 bg-white rounded-md text-lg text-gray-800 mb-6 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-4 px-8 bg-white rounded-md text-pink-500 text-lg font-medium hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Submit
          </button>
          {isSubmitted && (
            <p className="text-white text-center mt-4">
              Message has been submitted!
            </p>
          )}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
