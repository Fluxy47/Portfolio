import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactMe({ shouldAnimate, finalY }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k54dy0o",
        "template_kztz7oo",
        form.current,
        "uhJ9y8XUMjS7QIGXs"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="h-screen contact-container "
      style={{
        position: "relative",
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0 }}
      animate={{
        y: finalY,
      }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="form-box">
        <div className="form-value">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="h2-class">Contact Me</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="Name" required name="user_name" />
              <label>Name</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="text" required name="user_email" />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="text" required name="message" />
              <label>Message</label>
            </div>
            <a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="button-class"
              >
                Submit
              </motion.button>
            </a>
            <div className="register"></div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
