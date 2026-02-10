import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

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

    const quickLinks = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/ravivarmanm', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ravivarman-m-00/', label: 'LinkedIn' },
        // { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    ];

    return (
        <footer className="relative bg-dark-950 border-t border-white/10">
            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform glow-primary"
                aria-label="Scroll to top"
            >
                <HiArrowUp className="text-xl" />
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text-animated mb-4">
                            &lt;Portfolio /&gt;
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Building digital experiences that make a difference. Let's create something
                            amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:glass-strong transition-all glow-hover-primary"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            <a
                                href="mailto:ravivarmanm@outlook.com"
                                className="hover:text-primary-400 transition-colors"
                            >
                                ravivarmanm@outlook.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        © {currentYear} Ravivarman. Made with{' '}
                        <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-primary-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-primary-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
