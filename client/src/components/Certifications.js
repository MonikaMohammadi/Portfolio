import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheckIcon } from '@heroicons/react/outline';

const certifications = [
  { title: 'Graphic Design – Code to Inspire', year: '2024' },
  { title: 'Graphic Design Fundamentals – Herat Online School', year: '2022' },
  { title: 'SAINT Training – WVA Herat', year: '2022' },
  { title: 'LIGHT 360 ILT – WVA Herat', year: '2022' },
  { title: 'Full Stack Web Development – Code to Inspire', year: '2021' },
  { title: 'English Language – Erteqa Institute', year: '2021' },
  { title: 'Microsoft Windows, Office & Internet – RWDOA', year: '2014' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-[#FDFAF6] py-24">
      <div className="container mx-auto px-6 md:px-16 text-left max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <BadgeCheckIcon className="h-10 w-10 text-[#99BC85]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] uppercase tracking-wide">
            Certifications & Training
          </h2>
        </motion.div>
        <p className="text-[#555] max-w-xl mb-12">
          Verified credentials that reflect my dedication to learning, teaching,
          and advancing in technology and design.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#E4EFE7] p-5 border-l-4 border-[#99BC85] cursor-default select-none"
              whileHover={{ scale: 1.05 }}
              style={{ transition: 'transform 0.3s ease' }}
            >
              <h3 className="text-xl font-semibold text-[#1e1e1e]">
                {cert.title}
              </h3>
              <p className="text-gray-700 mt-2 font-mono">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
