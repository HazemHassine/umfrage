// 'use client';

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="py-4 border-b border-gray-200 w-80 justify-center flex flex-col">
//       <div
//         className="flex justify-between items-center cursor-pointer group"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
//           {question}
//         </h3>
//         <motion.span
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           className="text-gray-600 group-hover:text-blue-600"
//         >
//           <ChevronDown size={24} />
//         </motion.span>
//       </div>
      
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className="pt-2"
//           >
//             <p className="text-gray-600">{answer}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FAQ = () => {
//   const faqData = [
//     {
//       question: "How do I create a poll?",
//       answer: "Simply sign up, click 'Create Poll' in your dashboard, and follow our intuitive form. You can customize options, set rewards, and publish in minutes."
//     },
//     {
//       question: "When do participants get paid?",
//       answer: "Payouts are processed instantly after completing a survey. Funds go directly to the participant's Umfrage wallet and can be withdrawn anytime."
//     },
//     {
//       question: "What payment methods are supported?",
//       answer: "We support all major credit cards, PayPal, and cryptocurrency. Participants can withdraw earnings via PayPal or direct bank transfer."
//     },
//     {
//       question: "How is data privacy handled?",
//       answer: "We use enterprise-grade encryption and never sell your data. All responses are anonymized and protected by our AI security system."
//     },
//     {
//       question: "Can I try Umfrage for free?",
//       answer: "Yes! Creators get 3 free polls/month. Participants can always answer polls for free and start earning immediately."
//     },
//     {
//       question: "What's your fee structure?",
//       answer: "We charge 5% platform fee on creator credits. No hidden fees - participants keep 100% of their earnings."
//     }
//   ];

//   return (
//     <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-gray-600">
//             Everything you need to know about creating and answering polls
//           </p>
//         </div>
        
//         <div className="bg-white flex flex-col items-center rounded-2xl shadow-lg p-8">
//           {faqData.map((item, index) => (
//             <FAQItem key={index} question={item.question} answer={item.answer} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="py-4 border-b border-gray-700 w-full"
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-400">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500 group-hover:text-blue-400"
        >
          <ChevronDown size={24} />
        </motion.span>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pt-4"
          >
            <p className="text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
    const faqData = [
      {
        question: "How do I create a poll?",
        answer: "Simply sign up, click 'Create Poll' in your dashboard, and follow our intuitive form. You can customize options, set rewards, and publish in minutes."
      },
      {
        question: "When do participants get paid?",
        answer: "Payouts are processed instantly after completing a survey. Funds go directly to the participant's Umfrage wallet and can be withdrawn anytime."
      },
      {
        question: "What payment methods are supported?",
        answer: "We support all major credit cards, PayPal, and cryptocurrency. Participants can withdraw earnings via PayPal or direct bank transfer."
      },
      {
        question: "How is data privacy handled?",
        answer: "We use enterprise-grade encryption and never sell your data. All responses are anonymized and protected by our AI security system."
      },
      {
        question: "Can I try Umfrage for free?",
        answer: "Yes! Creators get 3 free polls/month. Participants can always answer polls for free and start earning immediately."
      },
      {
        question: "What's your fee structure?",
        answer: "We charge 5% platform fee on creator credits. No hidden fees - participants keep 100% of their earnings."
      }
    ];  

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about creating and answering polls
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;