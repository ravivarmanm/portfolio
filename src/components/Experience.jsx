import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '../utils/animations';
import experienceData from '../data/experience.json';

const Experience = () => {
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
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 opacity-30"></div>

                    <div className="space-y-12">
                        {experienceData.map((job, index) => (
                            <motion.div
                                key={job.id}
                                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', index * 0.1)}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-4 border-dark-900 z-10 glow-primary"></div>

                                {/* Content card */}
                                <div className="w-full md:w-5/12">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 group cursor-pointer"
                                    >
                                        {/* Header */}
                                        <div className="mb-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
                                                    {job.position}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                                <HiOfficeBuilding className="text-secondary-400" />
                                                <span className="font-semibold">{job.company}</span>
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <HiCalendar className="text-primary-400" />
                                                    <span>{job.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <HiLocationMarker className="text-primary-400" />
                                                    <span>{job.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {job.description}
                                        </p>

                                        {/* Responsibilities */}
                                        <ul className="space-y-2 mb-4">
                                            {job.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                    <span className="text-primary-400 mt-1">▹</span>
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-2/12"></div>
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
                        href="/resume.pdf"
                        download
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
