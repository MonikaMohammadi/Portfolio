import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#FDFAF6] shadow-md' : 'bg-[#E4EFE7]'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            alt="Monika Mohammadi"
            src="/1600w-OUV9Rb4RL0U.webp"
            className="h-10 w-10 rounded-full border border-[#99BC85] shadow-sm"
          />
          <span className="text-[#99BC85] text-2xl font-bold tracking-wide">
            Monika
          </span>
        </motion.div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {[
            'about',
            'projects',
            'skills',
            'certifications',
            'experience',
            'contact',
          ].map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer text-[#1a1a1a] hover:text-[#99BC85] transition-all"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
