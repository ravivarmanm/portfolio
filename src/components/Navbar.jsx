import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navVariants } from '../utils/animations';
import { useScrollSpy } from '../hooks/useScrollspy';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const activeSection = useScrollSpy(sections, 100);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="show"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-2xl font-bold gradient-text-animated hover:scale-105 transition-transform"
                        >
                            &lt;Portfolio /&gt;
                        </button>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.id
                                        ? 'text-primary-400 bg-primary-500/10 glow-primary'
                                        : 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Resume Button - Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <a
                            href={`${import.meta.env.BASE_URL}resume.pdf`}
                            download="Ravivarman_Resume.pdf"
                            className="btn-outline text-sm"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-primary-400 focus:outline-none transition-colors"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden glass-strong"
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeSection === link.id
                                ? 'text-primary-400 bg-primary-500/10 glow-primary'
                                : 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download="Ravivarman_Resume.pdf"
                        className="block w-full text-center btn-outline mt-4"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
