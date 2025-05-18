import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#FDFAF6] flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#99BC85] mb-6">
          Monika Mohammadi
        </h1>
        <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
          I'm a frontend developer with a passion for clean design and elegant
          user interfaces. I enjoy transforming ideas into responsive,
          accessible, and modern web experiences.
        </p>
        <p className="mt-4 text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
          Skilled in React, Tailwind CSS, and JavaScript always learning,
          building, and growing through real-world development.
        </p>

        <a
          href="/MonikaMohammadiCV.pdf"
          download="MonikaMohammadiCV.pdf"
          className="mt-8 inline-block px-6 py-3 bg-[#99BC85] text-white font-semibold rounded-lg shadow-md hover:bg-[#85a76b] transition-colors"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
