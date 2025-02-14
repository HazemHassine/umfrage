'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import NavbarUniversal from "./components/NavbarUniversal";
import Stats from "./components/Stats";
import { Coins, Wallet, Smartphone, Shield } from "lucide-react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
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

export default function Home() {
  const whyUs = [
    {
      icon: <Coins size={40} className="text-blue-400" />,
      title: "Lower Fees",
      description: "We offer lower fees compared to competitors, ensuring more value for both creators and participants.",
    },
    {
      icon: <Wallet size={40} className="text-green-400" />,
      title: "Higher Payouts",
      description: "Participants earn more for their time, making Umfrage the most rewarding platform for answering polls.",
    },
    {
      icon: <Smartphone size={40} className="text-purple-400" />,
      title: "Ease of Use",
      description: "Creating and participating in polls is simple, efficient, and fully customizable to your needs.",
    },
    {
      icon: <Shield size={40} className="text-yellow-400" />,
      title: "AI-Powered Security",
      description: "Our smart AI security layer detects and prevents bot activity, ensuring genuine responses and data integrity.",
    }
  ];

  return (
    <div className="w-full">
      <NavbarUniversal />

      <main className="">
        {/* Hero Section */}
        <section className="min-h-[90vh] pt-20 mb-20">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-8">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Transform Surveys into Earnings with{' '}
                  <span className="text-blue-600">Umfrage</span>
                </motion.h1>
                <p className="text-lg text-gray-600">
                  Create engaging polls effortlessly or earn rewards by participating in surveys -
                  all in one secure platform.
                </p>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="py-3 px-8 bg-blue-600 text-white rounded-lg text-lg font-medium"
                  >
                    Get Started Free
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="py-3 px-8 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-medium"
                  >
                    How It Works
                  </motion.button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/simplistic-woman-answering-questionnaire.png"
                    width={600}
                    height={600}
                    alt="Survey illustration"
                  />
                </motion.div>
              </div>
            </div>
            <Stats />

          </AnimatedSection>
        </section>


        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center text-white mb-16">
                Why Choose Umfrage?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center space-y-6"
                  >
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <AnimatedSection>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FAQ />
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}