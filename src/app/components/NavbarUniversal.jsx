'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function NavbarUniversal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo with gradient text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Umfrage
          </span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium"
          >
            Poll Creators
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium"
          >
            Poll Respondents
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-blue-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute w-full bg-blue-900 left-0 top-16 px-6 py-4 space-y-4 z-50"
        >
          <div className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium">
            Poll Creators
          </div>
          <div className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium">
            Poll Respondents
          </div>
          <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export default NavbarUniversal;