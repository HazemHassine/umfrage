'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Mail, Lock, Bell, Palette, Save } from 'lucide-react';
import NavbarProfile from "@/app/components/NavbarProfile";
import Footer from "@/app/components/Footer";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    notifications: {
      email: true,
      push: false,
    },
    theme: 'light',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleNotificationChange = (type) => {
    setUser(prevUser => ({
      ...prevUser,
      notifications: {
        ...prevUser.notifications,
        [type]: !prevUser.notifications[type],
      },
    }));
  };

  const handleThemeChange = (theme) => {
    setUser(prevUser => ({
      ...prevUser,
      theme,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save logic here
    console.log('Saving settings:', user);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarProfile user={user} />

      <main className="container mx-auto px-4 py-8">
        <AnimatedSection>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
        </AnimatedSection>

        <form onSubmit={handleSubmit}>
          <AnimatedSection>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
              <div className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <User className="mr-2" /> Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
              <div className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Lock className="mr-2" /> Security
                </h2>
                <div>
                  <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
              <div className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Bell className="mr-2" /> Notifications
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="emailNotifications"
                      checked={user.notifications.email}
                      onChange={() => handleNotificationChange('email')}
                      className="mr-2"
                    />
                    <label htmlFor="emailNotifications">Email Notifications</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pushNotifications"
                      checked={user.notifications.push}
                      onChange={() => handleNotificationChange('push')}
                      className="mr-2"
                    />
                    <label htmlFor="pushNotifications">Push Notifications</label>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
              <div className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Palette className="mr-2" /> Theme
                </h2>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleThemeChange('light')}
                    className={`px-4 py-2 rounded-md ${user.theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => handleThemeChange('dark')}
                    className={`px-4 py-2 rounded-md ${user.theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center"
              >
                <Save className="mr-2" /> Save Changes
              </motion.button>
            </div>
          </AnimatedSection>
        </form>
      </main>

      <Footer />
    </div>
  );
}