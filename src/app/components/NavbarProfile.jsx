"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, User, Settings, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

function NavbarProfile({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: "Profile", icon: User, href: "/profile" },
    { label: "Settings", icon: Settings, href: "/profile/settings" },
    {
      label: "Logout",
      icon: LogOut,
      onClick: () => {
        /* Implement logout logic */
      },
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo with gradient text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Link href="/">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Umfrage
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium"
          >
            Dashboard
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium"
          >
            My Polls
          </motion.div>
          <div className="relative" ref={profileRef}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-8 h-8 rounded-full bg-white text-purple-600 flex items-center justify-center font-bold">
                {getInitials(user.name)}
              </div>
              <span>{user.name}</span>
            </motion.button>
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                >
                  {menuItems.map((item, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-gray-100">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <item.icon size={18} />
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={item.onClick}
                          className="flex items-center gap-2 text-gray-700 w-full text-left"
                        >
                          <item.icon size={18} />
                          <span>{item.label}</span>
                        </button>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-blue-900 left-0 top-16 px-6 py-4 space-y-4 z-50"
          >
            <div className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium">
              News 
            </div>
            <div className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium">
              Dashboard
            </div>
            <div className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium">
              My Polls
            </div>

            {menuItems.map((item, index) => (
              <div
                key={index}
                className="text-blue-100 cursor-pointer hover:text-blue-400 transition-colors font-medium"
              >
                {item.href ? (
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarProfile;
