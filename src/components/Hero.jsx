import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { fadeIn, textVariant } from '../utils/animations';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const roles = ['Front end Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

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
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>

            {/* Floating orbs */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={textVariant(0.2)}
                    initial="hidden"
                    animate="show"
                    className="mb-6"
                >
                    <h2 className="text-lg md:text-xl text-primary-400 font-mono mb-2">
                        Hi, my name is
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                        <span className="gradient-text-animated text-shadow-glow">
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
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 h-16 md:h-20">
                        I'm a <span className="text-primary-400">{displayText}</span>
                        <span className="animate-pulse text-primary-400">|</span>
                    </h2>
                </motion.div>

                <motion.p
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
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
                        className="btn-primary"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn-outline"
                    >
                        Get In Touch
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
                            className="text-gray-400 hover:text-primary-400 transition-colors glow-hover-primary"
                            aria-label={social.label}
                        >
                            <social.icon size={28} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-primary-400 hover:text-primary-300 transition-colors"
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
