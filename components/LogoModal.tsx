"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LogoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal when component mounts (website opens)
    setIsOpen(true);
    
    // Auto close after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo with Clarify Effect */}
          <motion.div
            className="w-96 h-96 relative"
            initial={{ 
              scale: 0.3,
              opacity: 0,
              filter: "blur(20px)"
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              filter: "blur(0px)"
            }}
            exit={{ 
              scale: 1.2,
              opacity: 0,
              filter: "blur(10px)"
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
              filter: { duration: 1.8 }
            }}
          >
            <Image
              src="/GK-logo.png"
              alt="Gopikrishna Sarvepalli Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
