import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const About = () => {
    return (
        <section id="about" className="section bg-dark-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div variants={fadeIn('down', 0)} className="text-center mb-16">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image/Avatar Section */}
                    <motion.div variants={fadeIn('right', 0.2)} className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-slow"></div>
                            <div className="relative glass-strong rounded-2xl p-2">
                                <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center">
                                    {/* Placeholder for profile image */}
                                    <div className="text-center">
                                        <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-6xl font-bold text-white">
                                            YN
                                        </div>
                                        <p className="text-gray-400 text-sm">Replace with your photo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div variants={fadeIn('left', 0.2)} className="space-y-6">
                        <div className="glass rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-primary-400 mb-4">
                                Hello! I'm a passionate developer
                            </h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    I'm a React developer with 3.5 years of experience building scalable, responsive, and user-friendly web applications. I specialize in creating dynamic UI components and delivering seamless user experiences using modern frontend technologies.
                                </p>
                                <p>
                                    I have worked on large-scale eCommerce platforms, developing features across Product Listing Pages, Product Detail Pages, Account, and Offers modules, focusing on performance, usability, and reusable component architecture.I have worked on large-scale eCommerce platforms, developing features across Product Listing Pages, Product Detail Pages, Account, and Offers modules, focusing on performance, usability, and reusable component architecture.
                                </p>
                                <p>
                                    My journey into tech started with curiosity about how web interfaces work, which grew into a passion for crafting clean and efficient user experiences. I enjoy solving complex UI challenges and continuously learning new technologies to stay updated with industry trends.
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                className="glass rounded-xl p-4 text-center hover:glass-strong transition-all duration-300 glow-hover-primary"
                            >
                                <div className="text-3xl font-bold text-primary-400 mb-1">3+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('up', 0.4)}
                                className="glass rounded-xl p-4 text-center hover:glass-strong transition-all duration-300 glow-hover-primary"
                            >
                                <div className="text-3xl font-bold text-primary-400 mb-1">10+</div>
                                <div className="text-sm text-gray-400">Projects Completed</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
