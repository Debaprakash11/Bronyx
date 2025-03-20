import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "What's the best thing about Switzerland?", answer: "I don't know, but the flag is a big plus!" },
  { question: "How do you make holy water?", answer: "You boil the hell out of it." },
  { question: "What do you call someone with no body and no nose?", answer: "Nobody knows." },
  { question: "Why do you never see elephants hiding in trees?", answer: "Because they're really good at it!" },
  { question: "Why can't you hear a pterodactyl go to the bathroom?", answer: "Because the 'P' is silent." },
  { question: "Why did the invisible man turn down the job offer?", answer: "He couldn't see himself doing it." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-8">Frequently asked questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <button 
              className="w-full flex justify-between items-center text-lg" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

