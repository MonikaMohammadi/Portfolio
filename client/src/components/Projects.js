import React from 'react';
import { motion } from 'framer-motion';
import { FolderIcon } from '@heroicons/react/outline';

const projects = [
  {
    title: 'Hospital Management MIS',
    techStack: 'PHP, MySQL, HTML, CSS, JavaScript',
    description:
      'Developed a Hospital Management Information System that streamlines patient records, wait time analytics, and operational efficiency with intuitive dashboards and reporting tools.',
    link: '#',
  },
  {
    title: 'Online Clothing Store',
    techStack: 'VueJS, CSS, JavaScript, MongoDB',
    description:
      'Built a comprehensive e-commerce website for clothing with admin, client, and merchant dashboards. Focused on customer engagement, product listings, and integrated marketing tools.',
    link: '#',
  },
  {
    title: 'Freelancing Portfolio Training',
    techStack: 'HTML, CSS, Bootstrap, JavaScript',
    description:
      'Designed and delivered web design and freelancing courses focused on building personal portfolios, optimizing freelancing profiles, and bidding on platforms like Upwork and Fiverr.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FDFAF6] py-24">
      <div className="container mx-auto px-6 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="flex items-center gap-4">
            <FolderIcon className="h-10 w-10 text-[#99BC85]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] uppercase tracking-wide">
              Projects
            </h2>
          </div>
          <p className="mt-4 text-[#555] max-w-2xl">
            A curated list of real-world projects where I’ve applied my skills
            in web development, systems design, and user-focused experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#E4EFE7] p-6 shadow-sm border-l-4 border-[#99BC85] hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#1e1e1e]">
                {project.title}
              </h3>
              <p className="text-sm text-[#4a4a4a] mt-1 italic">
                {project.techStack}
              </p>
              <p className="mt-4 text-[#333] text-base leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-4 inline-block text-[#99BC85] font-semibold hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
