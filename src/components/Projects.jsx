/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '../utils/animations';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [filter, setFilter] = useState('featured');

    const filteredProjects = filter === 'featured'
        ? projectsData.filter(project => project.featured)
        : projectsData.filter(project => !project.featured);

    return (
        <section id="projects" className="section bg-transparent relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div variants={fadeIn('down', 0)} className="text-center mb-16">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">Showcase of my technical endeavors</p>
                </motion.div>

                {/* Filter buttons */}
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    className="flex justify-center gap-4 mb-12"
                >
                    {['featured', 'other'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-6 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 border ${filter === status
                                ? 'bg-violet-500/10 border-violet-500 text-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                                : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {status === 'featured' ? 'FEATURED PROJECTS' : 'OTHER PROJECTS'}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group h-full"
                            >
                                <div className="glass-strong rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] h-full flex flex-col relative">
                                    {/* Project visualization */}
                                    <div className="relative h-48 bg-black overflow-hidden group-hover:glow-primary-sm transition-all duration-500">
                                        {/* Project Image */}
                                        <img
                                            src={project.image.startsWith('http') ? project.image : `${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 to-purple-950/40 group-hover:opacity-60 transition-opacity duration-300"></div>

                                        {/* Overlay Actions */}
                                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                            <a
                                                // href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/5 border border-white/20 rounded-full hover:bg-violet-500 hover:border-violet-500 hover:text-white text-white transition-all duration-300 transform hover:scale-110"
                                                title="View Live"
                                            >
                                                <HiEye className="text-xl" />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/5 border border-white/20 rounded-full hover:bg-purple-500 hover:border-purple-500 hover:text-white text-white transition-all duration-300 transform hover:scale-110"
                                                title="View Code"
                                            >
                                                <HiCode className="text-xl" />
                                            </a>
                                        </div>

                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div className="absolute top-3 right-3 px-2 py-1 bg-violet-600 text-white text-[10px] font-bold font-mono rounded overflow-hidden">
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                                <span className="relative z-10">FEATURED</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-violet-400 transition-colors flex items-center gap-2">
                                            {project.title}
                                            <HiExternalLink className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1 line-clamp-3 text-justify">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.slice(0, 4).map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 text-[10px] font-mono text-violet-300 bg-violet-500/5 border border-violet-500/20 rounded hover:bg-violet-500/10 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-2 py-1 text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 rounded">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom highlight line */}
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    className="text-center mt-16"
                >
                    <a
                        href="https://github.com/ravivarmanm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-violet-400 hover:text-violet-400 transition-all duration-300 group"
                    >
                        <HiCode className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-mono text-sm">github.com/ravivarmanm</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
