import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://portfolio-ip44.onrender.com/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );
      const result = await res.json();
      if (res.ok) {
        setStatus(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="bg-[#FDFAF6] text-[#111111] py-24">
      <div className="container mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-10"
        >
          <h2 className="text-4xl font-extrabold uppercase tracking-wide text-[#99BC85]">
            Get In Touch
          </h2>
          <p className="text-lg leading-relaxed max-w-md">
            I’d love to hear from you! Whether it’s a collaboration,
            opportunity, or just a hello, feel free to connect with me.
          </p>

          <div className="space-y-6">
            <ContactInfo
              icon={<MailIcon className="w-6 h-6 text-[#99BC85]" />}
              text="mohammadmonika19@gmail.com"
            />
            <ContactInfo
              icon={<PhoneIcon className="w-6 h-6 text-[#99BC85]" />}
              text="+93 729757608"
            />
            <ContactInfo
              icon={<LocationMarkerIcon className="w-6 h-6 text-[#99BC85]" />}
              text="Herat, Afghanistan"
            />
          </div>

          <div className="flex space-x-8 mt-6 text-[#99BC85] text-2xl">
            <a
              href="https://github.com/MonikaMohammadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/monika-mohammadi-88b84a1b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#E4EFE7] p-10 border-l-4 border-[#99BC85] flex flex-col space-y-6"
          noValidate
        >
          <InputField
            label="Your Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <InputField
            label="Your Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-[#111111]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here"
              required
              className="w-full bg-[#FDFAF6] border border-[#99BC85] px-4 py-3 text-[#111111] font-mono text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#99BC85]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#99BC85] text-[#FDFAF6] font-extrabold uppercase py-4 tracking-widest hover:bg-[#7F995E] transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center mt-4 text-[#99BC85] font-semibold">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-4 text-lg font-medium text-[#111111]">
    {icon}
    <span>{text}</span>
  </div>
);

const InputField = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label htmlFor={id} className="block mb-2 font-semibold text-[#111111]">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-[#FDFAF6] border border-[#99BC85] px-4 py-3 text-[#111111] font-mono text-base focus:outline-none focus:ring-2 focus:ring-[#99BC85]"
    />
  </div>
);

export default Contact;
