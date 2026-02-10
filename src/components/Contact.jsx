/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { fadeIn, staggerContainer } from '../utils/animations';
import { emailConfig } from '../config/emailjs';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Check if EmailJS is configured
            if (emailConfig.serviceId === 'service_a1e8rhl') {
                // Simulate success for demo purposes
                await new Promise(resolve => setTimeout(resolve, 1000));
                setSubmitStatus({
                    type: 'info',
                    message: 'EmailJS not configured yet. Please add your credentials in src/config/emailjs.js'
                });
                setIsSubmitting(false);
                return;
            }

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Ravivarman M',
                },
                emailConfig.publicKey
            );

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.',
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: 'ravivarmanm@outlook.com',
            href: 'mailto:ravivarmanm@outlook.com',
        },
        {
            icon: HiPhone,
            label: 'Phone',
            value: '+91 9944237771',
            href: 'tel:+919944237771',
        },
        {
            icon: HiLocationMarker,
            label: 'Location',
            value: 'Chennai, Tamil Nadu',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/ravivarmanm', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ravivarman-m-00/', label: 'LinkedIn' },
        // { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
        { icon: FaEnvelope, url: 'mailto:ravivarmanm@outlook.com', label: 'Email' },
    ];

    return (
        <section id="contact" className="section bg-dark-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-6xl mx-auto relative z-10"
            >
                <motion.div variants={fadeIn('down', 0)} className="text-center mb-16">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's work together on your next project</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div variants={fadeIn('right', 0.2)} className="space-y-8">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary-400 mb-6">
                                Let's talk about everything!
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Have a project in mind or just want to chat? Feel free to reach out!
                                I'm always open to discussing new projects, creative ideas, or
                                opportunities to be part of your vision.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center glow-primary">
                                            <info.icon className="text-2xl text-primary-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">{info.label}</p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-gray-200 hover:text-primary-400 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-200">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-sm text-gray-500 mb-4">Follow me on</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:glass-strong transition-all glow-hover-primary"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="text-xl" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={fadeIn('left', 0.2)}>
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="textarea"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                                        : submitStatus.type === 'error'
                                            ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                                            : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                                        }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
