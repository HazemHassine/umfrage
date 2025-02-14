'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: ["Create Poll", "Answer Polls", "Pricing", "API Docs"],
    },
    {
      title: "Resources",
      links: ["Blog", "Guides", "Case Studies", "Help Center"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Partners", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookie Policy"],
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, name: "Twitter" },
    { icon: <Github size={20} />, name: "GitHub" },
    { icon: <Linkedin size={20} />, name: "LinkedIn" },
    { icon: <Globe size={20} />, name: "Website" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="bg-gradient-to-br from-blue-900 to-purple-900 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Umfrage
              </span>
            </motion.div>
            <p className="text-sm leading-6 text-blue-100/80">
              Empowering meaningful connections through secure, rewarding surveys.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-200 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title} className="mb-8 md:mb-0">
                  <h3 className="text-sm font-semibold leading-6 text-blue-300">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-sm leading-6 text-blue-100/80 hover:text-blue-400 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(2).map((section) => (
                <div key={section.title} className="mb-8 md:mb-0">
                  <h3 className="text-sm font-semibold leading-6 text-blue-300">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-sm leading-6 text-blue-100/80 hover:text-blue-400 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-blue-200/60">
            © {new Date().getFullYear()} Umfrage. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;