import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium pr-8">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-300">{answer}</p>
      </div>
    </div>
  );
};

const ContactFaq = () => {
  // FAQ data
  const faqs = [
    {
      question: "What information should I provide when inquiring about a project?",
      answer: "To help us better understand your needs, include details about your project scope, timeline, budget considerations, and any specific technical requirements or challenges. The more information you provide, the more accurately we can assess and respond to your inquiry."
    },
    {
      question: "How quickly can I expect a response after submitting my inquiry?",
      answer: "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message and we'll prioritize your inquiry accordingly."
    },
    {
      question: "Do you work with clients outside of the United States?",
      answer: "Yes, we work with clients globally. Our team is experienced in remote collaboration and we have clients across North America, Europe, Asia, and Australia. We can accommodate different time zones for meetings and communication."
    },
    {
      question: "What is your typical project development process?",
      answer: "Our process typically includes an initial consultation, project scoping and proposal, design phase, development phase, testing and quality assurance, client review, and final deployment. We believe in an iterative approach with regular client feedback throughout the process."
    },
    {
      question: "Can you sign an NDA before I share my project details?",
      answer: "Absolutely. We understand the sensitive nature of innovative projects and are happy to sign an NDA before any detailed discussions. Just let us know in your initial contact and we'll arrange for this."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-slate-300">Common questions about working with us and our contact process</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl px-2">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;