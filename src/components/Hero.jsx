/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { fadeIn, textVariant } from '../utils/animations';
import { useEffect, useState } from 'react';

const roles = [
    'Frontend Engineer',
    'E-commerce Solutions Specialist',
    'Certified KIBO Developer',
    'User Experience Advocate',
    'Web Performance Optimizer'
];

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < currentRole.length) {
                setDisplayText(currentRole.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(currentRole.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    };

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/ravivarmanm', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ravivarman-m-00/', label: 'LinkedIn' },
        // { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
        { icon: FaEnvelope, url: 'mailto:ravivarmanm@outlook.com', label: 'Email' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

            <motion.div
                animate={{
                    x: mousePosition.x * -2,
                    y: mousePosition.y * -2,
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-50"
            />
            <motion.div
                animate={{
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2,
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-50"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={textVariant(0.2)}
                    initial="hidden"
                    animate="show"
                    className="mb-6 relative inline-block group"
                >
                    <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h2 className="text-base md:text-lg text-primary-400 font-mono mb-2 relative z-10">
                        Hi, my name is
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 relative z-10">
                        <span
                            className="gradient-text-animated text-shadow-glow glitch-hover cursor-default"
                            data-text="M.RAVIVARMAN"
                        >
                            M.RAVIVARMAN
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    className="mb-8"
                >
                    <div className="inline-block glass px-6 py-1 rounded-xl border glass-strong shadow-lg">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-300 h-16 md:h-20 flex items-center justify-center gap-2">
                            I'm a <span className="text-primary-400">{displayText}</span>
                            <span className="animate-pulse text-primary-400">|</span>
                        </h2>
                    </div>
                </motion.div>

                <motion.p
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    I build scalable and high-performance web applications using React and modern frontend technologies, creating seamless user experiences and responsive interfaces.
                </motion.p>

                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="btn-primary group relative overflow-hidden"
                    >
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn-outline group relative overflow-hidden"
                    >
                        <span className="relative z-10">Get In Touch</span>
                        <div className="absolute inset-0 bg-primary-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={fadeIn('up', 1)}
                    initial="hidden"
                    animate="show"
                    className="flex justify-center gap-6 mb-16"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-primary-400 transition-colors glow-hover-primary relative"
                            aria-label={social.label}
                        >
                            <social.icon size={28} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute  left-1/2 transform -translate-x-1/2"
                    style={{ bottom: '-3.5rem' }}
                >
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-primary-400 hover:text-primary-300 transition-colors p-2 rounded-full hover:bg-white/5"
                        aria-label="Scroll to about section"
                    >
                        <HiArrowDown size={32} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
