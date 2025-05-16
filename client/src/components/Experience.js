import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/outline';

const experiences = [
  {
    title: 'Freelancing Trainer – Web Design & Digital Freelancing',
    company: 'Youth Health & Development Organization, Herat',
    duration: 'Oct 2024 – Present',
    responsibilities: [
      'Taught students how to build professional profiles on platforms like Fiverr and Upwork.',
      'Delivered beginner-friendly web design training in HTML, CSS, Bootstrap, and JavaScript.',
      'Mentored students in portfolio building and strategies for securing freelance jobs.',
    ],
  },
  {
    title: 'Security and Access Intern',
    company: 'World Vision International, Herat',
    duration: 'Aug 2022 – Dec 2022',
    responsibilities: [
      'Maintained and updated employee and vehicle tracking systems.',
      'Monitored CCTV, conducted security assessments, and managed training logistics.',
      'Created employee databases and generated reports on vehicle usage, fuel, and logistics.',
    ],
  },
  {
    title: 'Database Instructor',
    company: 'Herat University – Faculty of Computer Science',
    duration: 'Apr 2022 – Jul 2022',
    responsibilities: [
      'Taught database systems to computer science students.',
      'Prepared exams, supervised assessments, and participated in faculty meetings.',
      'Worked on student capacity-building initiatives.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    duration: '2020 – Present',
    responsibilities: [
      'Built custom websites using JavaScript, PHP, React, and modern web frameworks.',
      'Developed Hospital Management and Online Store systems with admin/client-side logic.',
      'Ensured SEO, responsiveness, and strong UI/UX in all client-facing products.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#FDFAF6] py-24">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <BriefcaseIcon className="h-10 w-10 text-[#99BC85]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] uppercase tracking-wide">
            Experience
          </h2>
        </motion.div>

        <p className="max-w-2xl text-[#555] mb-12">
          My journey through tech, teaching, and digital transformation —
          mentoring future freelancers and creating real-world software
          solutions.
        </p>

        {/* Experience List */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative pl-8 border-l-4 border-[#99BC85]"
            >
              <h3 className="text-2xl font-semibold text-[#1e1e1e]">
                {exp.title}
              </h3>
              <p className="italic text-[#666] mt-1">
                {exp.company} • {exp.duration}
              </p>
              <ul className="mt-4 list-disc list-inside text-[#333] space-y-2 text-base leading-relaxed">
                {exp.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
