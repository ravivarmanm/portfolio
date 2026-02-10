/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';
import skillsData from '../data/skills.json';

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

                <motion.div variants={fadeIn('up', 0.2)} className="max-w-5xl mx-auto">
                    <div className="glass-strong rounded-xl border border-white/5 overflow-hidden font-mono text-sm shadow-2xl">
                        {/* Terminal Header */}
                        <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-gray-500 text-xs">skills.json — readonly</div>
                            <div className="w-16"></div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 md:p-8 bg-black/50 text-gray-300 overflow-x-auto scrollbar-custom">
                            <div className="leading-relaxed">
                                <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-purple-400">{`{`}</span>
                                <br />
                                <div className="pl-4 md:pl-8">
                                    <span className="text-blue-300">name</span>: <span className="text-green-400">'Ravivarman M'</span>,
                                    <br />
                                    <span className="text-blue-300">role</span>: <span className="text-green-400">'Full Stack Developer'</span>,
                                    <br />
                                    <span className="text-blue-300">skills</span>: <span className="text-purple-400">{`{`}</span>
                                    <br />

                                    {skillsData.categories.map((category, index) => (
                                        <div key={category.name} className="pl-4 md:pl-8 py-1 group hover:bg-white/5 rounded transition-colors">
                                            <span className="text-blue-300">{category.name.toLowerCase().replace(/\s+/g, '_')}</span>: <span className="text-purple-400">[</span>
                                            <br />
                                            <div className="pl-4 md:pl-8 flex flex-wrap gap-2 py-1">
                                                {category.skills.map((skill, i) => (
                                                    <span key={skill.name} className="text-green-400 hover:text-green-300 transition-colors cursor-default">
                                                        '{skill.name}'{i < category.skills.length - 1 ? ',' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-purple-400">]{index < skillsData.categories.length - 1 ? ',' : ''}</span>
                                            <span className="text-gray-600 text-xs ml-4 opacity-0 group-hover:opacity-100 transition-opacity">// {category.skills.length} items</span>
                                        </div>
                                    ))}

                                    <span className="text-purple-400">{`}`}</span>,
                                    <br />
                                    <span className="text-blue-300">passions</span>: <span className="text-purple-400">[</span>
                                    <br />
                                    <div className="pl-4 md:pl-8">
                                        <span className="text-green-400">'Clean Code'</span>, <span className="text-green-400">'UI/UX'</span>, <span className="text-green-400">'Optimization'</span>, <span className="text-green-400">'Coffee'</span>
                                    </div>
                                    <span className="text-purple-400">]</span>
                                </div>
                                <span className="text-purple-400">{`}`}</span>;
                                <span className="animate-pulse inline-block w-2.5 h-5 bg-primary-400 ml-1 align-middle"></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
