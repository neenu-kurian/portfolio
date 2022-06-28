import React,{ useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md"
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xx926sk', 'template_ceo9g4b', form.current, 'Qfv_Jw5oJuUqSrsNg')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>neenukurian92@gmail.com</h5>
            <a href="mailto:neenukurian92@gmail.com" target="_blank" rel="noreferrer">Send a messsage</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your full name" required />
          <input type="email" name='email' placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
