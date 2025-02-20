'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Mail, Briefcase, Calendar, Award, Settings, Bell, CreditCard } from 'lucide-react';
import Footer from "@/app/components/Footer";
import NavbarProfile from '../components/NavbarProfile';
import Link from 'next/link';

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

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const uid = 'wzY0o6FW00e3W7z12oquvw8F0R02'; // Replace with actual UID retrieval method
        console.log('UID:', uid);
        const response = await fetch(`/api/profile?uid=${uid}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('An unexpected error occurred');
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarProfile user={user} />

      <main className="container mx-auto px-4 py-8">
        <AnimatedSection>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48"></div>
            <div className="relative px-8 pb-8">
              <div className="flex flex-col sm:flex-row -mt-12 items-center sm:items-end sm:space-x-5">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                  <motion.img
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
                    alt={user.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  />
                </div>
                <div className="mt-6 sm:mt-0 text-center sm:text-left">
                  <motion.h1 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {user.name}
                  </motion.h1>
                  <p className="text-gray-600">{user.role}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <User className="mr-2" /> Personal Information
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2 text-gray-400" />
                  <span>{user.email}</span>
                </li>
                <li className="flex items-center">
                  <Briefcase className="mr-2 text-gray-400" />
                  <span>{user.occupation}</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 text-gray-400" />
                  <span>{user.age} years old</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="mr-2" /> Achievements
              </h2>
              <p className="text-gray-600">Coming soon! Track your survey participation milestones and earn badges.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Settings className="mr-2" /> Quick Actions
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link  href="/profile/settings"  className="w-full text-left py-2 px-4 rounded bg-gray-100 hover:bg-gray-200 transition duration-200 flex items-center">
                    <Bell className="mr-2"/> Notification Settings
                  </Link>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-4 rounded bg-gray-100 hover:bg-gray-200 transition duration-200 flex items-center">
                    <CreditCard className="mr-2" /> Payment Methods
                  </button>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-600">Your recent survey participation and rewards will be displayed here.</p>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}