import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaHtml5, FaJs, FaGitAlt, FaServer,
    FaCss3Alt, FaSass, FaMobile, FaNpm, FaChrome, FaJira
} from 'react-icons/fa';
import {
    SiTypescript, SiExpress, SiMui, SiRedux, SiStorybook, SiPostman
} from 'react-icons/si';
import { fadeIn, staggerContainer } from '../utils/animations';
import skillsData from '../data/skills.json';

const iconMap = {
    FaReact, FaNodeJs, FaHtml5, FaJs, FaGitAlt, FaServer,
    FaCss3Alt, FaSass, FaMobile, FaNpm, FaChrome, FaJira,
    SiTypescript, SiExpress, SiMui, SiRedux, SiStorybook, SiPostman
};

const Skills = () => {
    return (
        <section id="skills" className="section bg-dark-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div variants={fadeIn('down', 0)} className="text-center mb-16">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">Tools and technologies I work with</p>
                </motion.div>

                <div className="space-y-12">
                    {skillsData.categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            variants={fadeIn('up', categoryIndex * 0.1)}
                            className="glass rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-primary-400 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                                {category.name}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill, skillIndex) => {
                                    const IconComponent = iconMap[skill.icon];

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="group"
                                        >
                                            <div className="glass-strong rounded-xl p-6 text-center transition-all duration-300 hover:glow-primary cursor-pointer">
                                                <div className="flex justify-center mb-4">
                                                    {IconComponent && (
                                                        <IconComponent
                                                            className="text-5xl text-primary-400 group-hover:text-primary-300 transition-colors"
                                                        />
                                                    )}
                                                </div>
                                                <h4 className="text-sm font-semibold text-gray-200 mb-2">
                                                    {skill.name}
                                                </h4>

                                                {/* Skill level bar */}
                                                <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                                                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills/Interests */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    className="mt-12 text-center"
                >
                    <div className="glass rounded-2xl p-8 inline-block">
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">
                            Also interested in
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Next.js', 'Performance Optimization', 'Testing (Jest/RTL)', 'Accessibility', 'Web Animations', 'PWA'].map((interest, index) => (
                                <motion.span
                                    key={interest}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-sm text-gray-300 hover:border-primary-500 transition-all cursor-default"
                                >
                                    {interest}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
