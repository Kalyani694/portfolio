import React, { useRef, useState } from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                'service_smv740j', 
                'template_1m6wq7j', 
                formRef.current, 
                'vGhEQBUjrEbxjQo4v'
            );
            setError(false);
            setSuccess(true);
        } catch (err) {
            setError(true);
            console.error('Error sending email:', err);
        }
    };

    return (
        <motion.div
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate"
        >
            {/* Contact Information */}
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>borasek694@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 9067271490</span>
                </motion.div>
            </motion.div>

            {/* Contact Form */}
            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input
                        type="text"
                        required
                        placeholder="Name"
                        name="name"
                        aria-label="Name"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        name="email"
                        aria-label="Email"
                    />
                    <textarea
                        rows={8}
                        required
                        placeholder="Message"
                        name="message"
                        aria-label="Message"
                    ></textarea>
                    <button type="submit">Submit</button>
                    {/* Feedback Messages */}
                    {error && (
                        <p className="error-message">
                            Failed to send message. Please try again later.
                        </p>
                    )}
                    {success && (
                        <p className="success-message">
                            Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
