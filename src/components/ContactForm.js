import React, { useState } from "react";
import { contactDetails } from "../data/contactDetails";
import { CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  const AUTO_REPLY_TEMPLATE_ID = process.env.REACT_APP_AUTO_REPLY_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      from_name: e.target.name.value,
      reply_to: e.target.email.value,
      message: e.target.message.value,
    };

    toast
      .promise(
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
          (response) => {
            return emailjs.send(
              SERVICE_ID,
              AUTO_REPLY_TEMPLATE_ID,
              {
                from_name: e.target.name.value,
                reply_to: e.target.email.value,
              },
              USER_ID
            );
          },
          (err) => {
            throw new Error("Failed to send message.");
          }
        ),
        {
          loading: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message",
        }
      )
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
      <Toaster />
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        Don't be shy! Hit me up! 👇
      </h2>
      <div className="space-y-6 mb-8">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center space-x-4 text-gray-900 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300"
            target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <item.Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>{item.text}</span>
          </a>
        ))}
      </div>
      {isSubmitted ? (
        <div className="h-fit flex flex-col items-center justify-center text-gray-900 dark:text-gray-100">
          <CheckCircle className="w-16 h-16 mb-4 text-green-500" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-center">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 placeholder-gray-500 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 placeholder-gray-500 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 placeholder-gray-500 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
