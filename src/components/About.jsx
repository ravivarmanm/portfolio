/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const About = () => {
    return (
        <section id="about" className="section bg-transparent relative overflow-hidden">
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
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative glass-strong rounded-2xl p-4 ring-1 ring-violet-500/10">
                                <div className="w-full max-w-sm bg-black/50 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6">
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden border border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.25)] mb-4">
                                        <img
                                            src={`${import.meta.env.BASE_URL}profile.png`}
                                            alt="Ravivarman M"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-ping opacity-10 pointer-events-none"></div>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-white tracking-wider">RAVIVARMAN M</h3>
                                    <p className="text-sm text-violet-400 font-mono mt-1">Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Content Section */}
                    <motion.div variants={fadeIn('left', 0.2)} className="space-y-8">
                        <div className="glass rounded-xl p-0 border border-white/5 relative overflow-hidden group hover:border-violet-500/20 transition-all duration-300">
                            {/* Terminal Header */}
                            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <div className="ml-4 text-xs text-gray-500 font-mono">developer_profile.js</div>
                            </div>

                            <div className="p-8 relative">
                                <div className="absolute top-20 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>

                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-display">
                                    <span className="text-violet-400 font-mono text-sm mr-2">01.</span>
                                    Background
                                </h3>

                                <div className="space-y-4 text-gray-400 leading-relaxed text-justify">
                                    <p>
                                        I build digital experiences where high-end design meets enterprise-grade functionality. With a deep focus on <span className="text-white font-medium">Frontend Engineering</span> and specialized expertise in <span className="text-white font-medium">KIBO Commerce</span>, I bridge the gap between complex e-commerce logic and intuitive user interfaces.
                                    </p>
                                    <p>
                                        My approach goes beyond writing clean code; I’m a UI/UX enthusiast who views every project through the lens of the end-user. Whether I’m architecting a seamless Order Management System or optimizing a headless storefront, I thrive on solving the technical puzzles that drive business growth and user delight.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                className="glass rounded-xl p-6 text-center hover:bg-violet-500/5 hover:border-violet-500/30 transition-all duration-300 border border-white/5 group"
                            >
                                <div className="text-4xl font-bold font-display text-white mb-2 group-hover:scale-110 group-hover:text-violet-400 transition-all duration-300">3.5+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('up', 0.4)}
                                className="glass rounded-xl p-6 text-center hover:bg-violet-500/5 hover:border-violet-500/30 transition-all duration-300 border border-white/5 group"
                            >
                                <div className="text-4xl font-bold font-display text-white mb-2 group-hover:scale-110 group-hover:text-violet-400 transition-all duration-300">10+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
                            </motion.div>
                        </div>

                        {/* Certifications */}
                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            className="glass rounded-xl p-6 border border-white/5 hover:border-violet-500/15 transition-all duration-300"
                        >
                            <h4 className="text-lg font-bold font-display text-white mb-4 flex items-center gap-2">
                                <span className="text-violet-400 font-mono text-sm">02.</span> Certifications
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    "Microsoft Azure Fundamentals (AZ-900)",
                                    "Azure AI Fundamentals (AI-900)",
                                    "Kibo Developer Certified"
                                ].map((cert, idx) => (
                                    <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 text-center hover:bg-violet-500/5 hover:border-violet-500/20 hover:text-white transition-all duration-300">
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
