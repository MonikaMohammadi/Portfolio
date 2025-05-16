import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon } from '@heroicons/react/outline';

const skills = [
  { name: 'JavaScript (ES6+)', icon: '🟨' },
  { name: 'PHP', icon: '🐘' },
  { name: 'HTML5 & CSS3', icon: '🌐' },
  { name: 'Bootstrap', icon: '🧩' },
  { name: 'Vue.js', icon: '🟩' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Visual Studio Code', icon: '🧠' },
  { name: 'Sublime Text', icon: '📝' },
  { name: 'Agile (SDLC)', icon: '🔁' },
  { name: 'CodeIgniter', icon: '🔥' },
  { name: 'MS Office Suite', icon: '📊' },
  { name: 'Kobo Toolbox', icon: '📋' },
  { name: 'Figma (Design Tools)', icon: '🎨' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#FDFAF6] py-24">
      <div className="container mx-auto px-6 md:px-16 text-left">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <CodeIcon className="h-10 w-10 text-[#99BC85]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] uppercase tracking-wide">
            Technical Skills
          </h2>
        </motion.div>

        <p className="max-w-2xl text-[#555] mb-12">
          My toolkit includes modern technologies and frameworks for developing
          scalable and dynamic applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-[#E4EFE7] rounded-none p-6 shadow-sm cursor-default flex flex-col items-center justify-center transition-shadow hover:shadow-md"
            >
              <div className="text-5xl">{skill.icon}</div>
              <h3 className="mt-4 text-center text-[#1e1e1e] font-semibold text-base">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
