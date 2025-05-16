import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/outline';

const About = () => {
  return (
    <section id="about" className="bg-[#FAF1E6] py-24">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center gap-16">
        {/* Image Column */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile2.jpeg"
            alt="Monika Mohammadi"
            className="w-full h-auto object-cover  hover:grayscale-0 transition-all duration-500"
            style={{ borderRadius: '50%' }}
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <AcademicCapIcon className="h-8 w-8 text-[#99BC85]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#1e1e1e] uppercase">
              About Me
            </h2>
          </div>

          <p className="text-[#4a4a4a] leading-8 text-lg">
            Hello! I'm{' '}
            <span className="text-[#99BC85] font-semibold">
              Monika Mohammadi
            </span>
            , a passionate web developer and educator with a strong foundation
            in{' '}
            <span className="font-semibold">
              JavaScript, Vue.js, Node.js, and database design
            </span>
            . I hold a Bachelor's degree in Computer Science from Herat
            University and have completed advanced training in full-stack
            development and graphic design.
          </p>

          <p className="mt-6 text-[#4a4a4a] leading-8 text-lg">
            As a proud <em>Afghan woman in tech</em>, I’m driven to empower
            others through education and technology. I’ve mentored students in
            freelancing, web design, and portfolio creation, helping them launch
            independent careers. My teaching roles and hands-on freelance
            experience have shaped me into a confident leader and community
            advocate.
          </p>

          <p className="mt-6 text-[#4a4a4a] leading-8 text-lg">
            I thrive on building impactful digital solutions — from hospital
            management systems to e-commerce platforms — and bring a creative
            and collaborative mindset to every project. Fluent in Dari, Pashto,
            and English, I work seamlessly across teams and cultures to make
            technology more inclusive and meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
