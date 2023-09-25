"use client";
import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import Script from "next/script";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameRegex = /^[a-zA-Z\s]*$/;
    let messageRegex = /^(?!.*(http|https)).*$/;
    if (!formData.name.match(nameRegex)) {
      setIsModalOpen1(true);
    } else if (!formData.email.match(emailRegex)) {
      setIsModalOpen1(true);
    } else if (!formData.message.match(messageRegex)) {
      setIsModalOpen1(true);
    } else {
      emailjs
        .send(
          "service_k1dn49a",
          "template_rjj68l7",
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          "v8HZ6Sk79OJKu27jg"
        )
        .then(
          (result: { text: any }) => {
            console.log(result.text);
            setIsModalOpen(true); // open modal if email is sent successfully
          },
          (error: { text: any }) => {
            console.log(error.text);
            setIsModalOpen1(true);
          }
        );
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className=" mt-96 flex h-[500px] w-full flex-row items-center justify-center  self-center border-l-2 border-r-2 border-t-2"
      onSubmit={handleSubmit}
    >
      <div className="flex w-3/4 flex-col border-l-2 border-r-2 pt-10  lg:w-1/3">
        <h6 className="h-10 pb-10 text-center text-xl text-white">GET IN CONTACT WITH ME</h6>
        <label htmlFor="name" className="w-11/12 self-center text-white">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-4 w-11/12 self-center border-2 bg-transparent text-white"
        />
        <label htmlFor="email" className="w-11/12 self-center text-white">
          EMAIL:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-11/12 self-center border-2 bg-transparent  text-white"
        />
        <label htmlFor="message" className="w-11/12 self-center text-white">
          MESSAGE:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="h-24 w-11/12 self-center border-2 bg-transparent text-white"
        ></textarea>
        <button type="submit" className="py-6 text-xl text-white">
          SUBMIT
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "500px",
              width: "80%",
              height: "auto",
              padding: "40px",
              borderRadius: "40px",
              backgroundColor: "transparent",
              border: "none",
            },
          }}
        >
          <iframe
            src="https://giphy.com/embed/NsPTjaNFdMx8ZPe9Qh"
            width="400"
            height="320"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/playmobil-post-letter-mail-NsPTjaNFdMx8ZPe9Qh">
              via GIPHY
            </a>
          </p>
        </Modal>
        <Modal
          isOpen={isModalOpen1}
          onRequestClose={() => setIsModalOpen1(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "500px",
              width: "80%",
              height: "auto",
              padding: "40px",
              borderRadius: "40px",
              backgroundColor: "transparent",
              border: "none",
            },
          }}
        >
          <iframe
            src="https://giphy.com/embed/ljtfkyTD3PIUZaKWRi"
            width="400"
            height="290"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>

          <p>
            <a href="https://giphy.com/gifs/theoffice-ljtfkyTD3PIUZaKWRi">via GIPHY</a>
          </p>
          <p>
            <a href="https://giphy.com/gifs/playmobil-post-letter-mail-NsPTjaNFdMx8ZPe9Qh">
              via GIPHY
            </a>
          </p>
        </Modal>
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></Script>
      </div>
    </form>
  );
}

export default Contact;
