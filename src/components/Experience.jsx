/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { HiOfficeBuilding, HiCalendar, HiLocationMarker, HiChevronDown } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '../utils/animations';
import experienceData from '../data/experience.json';
import { useState } from 'react';

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="section bg-dark-900 relative overflow-hidden">
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
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">My professional journey</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>

                    <div className="space-y-12">
                        {experienceData.map((job, index) => (
                            <motion.div
                                key={job.id}
                                variants={fadeIn('up', index * 0.1)}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-dark-950 border border-primary-500 rounded-full z-10 mt-6 shadow-[0_0_10px_rgba(34,204,240,0.5)]">
                                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                                    <motion.div
                                        layout
                                        onClick={() => toggleExpand(job.id)}
                                        className="relative group cursor-pointer"
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                        <motion.div layout className="glass-strong rounded-xl p-6 border border-white/5 relative z-10 hover:border-primary-500/30 transition-colors">
                                            {/* Date Badge */}
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-mono text-primary-400 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                                <HiCalendar />
                                                <span>{job.duration}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                                                {job.position}
                                            </h3>

                                            <div className={`flex items-center gap-2 text-gray-400 text-sm mb-4 font-mono ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                                <HiOfficeBuilding className="text-secondary-400" />
                                                <span>{job.company}</span>
                                                <span className="text-gray-600">|</span>
                                                <HiLocationMarker className="text-secondary-400" />
                                                <span>{job.location}</span>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                {job.description}
                                            </p>

                                            <AnimatePresence>
                                                {expandedId === job.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <ul className={`space-y-2 mb-4 pt-4 border-t border-white/5 ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                                                            {job.responsibilities.map((responsibility, idx) => (
                                                                <li key={idx} className={`flex items-start gap-2 text-sm text-gray-400 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                                                    <span className="text-primary-400 mt-1">▹</span>
                                                                    <span>{responsibility}</span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                                            {job.technologies.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-2 py-1 text-[10px] font-mono font-medium text-gray-300 bg-white/5 border border-white/10 rounded"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <div className={`mt-4 flex items-center gap-1 text-xs text-primary-400 font-mono opacity-50 justify-center group-hover:opacity-100 transition-opacity`}>
                                                {expandedId === job.id ? 'Show Less' : 'Show Details'}
                                                <motion.span
                                                    animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                                                >
                                                    <HiChevronDown />
                                                </motion.span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Download Resume CTA */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    className="text-center mt-16"
                >
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download="Ravivarman_Resume.pdf"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Download Full Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experience;
