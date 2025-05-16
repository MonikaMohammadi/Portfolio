 import React from 'react';
 import { motion } from 'framer-motion';

 const Footer = () => {
   return (
     <footer className="bg-[#FAF1E6] py-6">
       <motion.div
         className="container mx-auto px-6 text-center text-sm text-[#4a4a4a]"
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.4, duration: 0.6 }}
       >
         © {new Date().getFullYear()}{' '}
         <span className="font-semibold text-[#99BC85]">Monika Mohammadi</span> All
         rights reserved.
       </motion.div>
     </footer>
   );
 };

 export default Footer;
