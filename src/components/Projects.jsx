import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '../utils/animations';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.featured);

    return (
        <section id="projects" className="section bg-dark-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div variants={fadeIn('down', 0)} className="text-center mb-12">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Some of my recent work</p>
                </motion.div>

                {/* Filter buttons */}
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    className="flex justify-center gap-4 mb-12"
                >
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'all'
                            ? 'bg-primary-500 text-white glow-primary'
                            : 'glass text-gray-300 hover:text-primary-400'
                            }`}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => setFilter('featured')}
                        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'featured'
                            ? 'bg-primary-500 text-white glow-primary'
                            : 'glass text-gray-300 hover:text-primary-400'
                            }`}
                    >
                        Featured
                    </button>
                </motion.div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={fadeIn('up', index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="glass rounded-2xl overflow-hidden hover:glass-strong transition-all duration-300 h-full flex flex-col">
                                {/* Project image */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                        {/* Placeholder for project image */}
                                        <div className="text-center">
                                            <HiCode className="text-6xl mx-auto mb-2 opacity-30" />
                                            <p className="text-sm">Project Screenshot</p>
                                        </div>
                                    </div>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-primary-500 rounded-full hover:bg-primary-600 transition-colors glow-primary"
                                            aria-label="View live demo"
                                        >
                                            <HiExternalLink className="text-white text-xl" />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-secondary-500 rounded-full hover:bg-secondary-600 transition-colors glow-secondary"
                                            aria-label="View source code"
                                        >
                                            <HiCode className="text-white text-xl" />
                                        </a>
                                    </div>

                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full glow-primary">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Project details */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                                        >
                                            <HiExternalLink />
                                            <span>Live Demo</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-secondary-400 hover:text-secondary-300 transition-colors"
                                        >
                                            <HiCode />
                                            <span>Source Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View more CTA */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/ravivarmanm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <HiCode className="text-xl" />
                        View More on GitHub
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
