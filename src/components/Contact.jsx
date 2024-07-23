import React, { useState } from "react";
import Reveal from "./Reveal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import { ClipLoader } from 'react-spinners'; // Import a spinner from React Spinners

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
      });
      form.reset();
      toast.success("Your message was sent successfully!"); // Show success notification
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an error sending your message. Please try again."); // Show error notification
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a Junior Software Developer with over 1 year of experience in full-stack and back-end development. My expertise lies mainly in JavaScript and Java. I am passionate about learning new technologies and continuously improving my skills. I have worked on various projects, designing and implementing user interfaces, integrating payment gateways, and ensuring system security and performance.
              </p>
            </div>
          </div>

          <form
            action="https://getform.io/f/azylgrqb"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Let's connect!</p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              textcolor="black"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="relative w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ClipLoader size={24} color="#ffffff" /> 
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </Reveal>

      <ToastContainer />
    </div>
  );
};

export default Contact;
