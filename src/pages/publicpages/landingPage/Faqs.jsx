import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const Faqs = () => {
    const showAnswer = (id) => {
        setFaqs(faqs.map(faq => faq.id === id ? {...faq, isOpen: !faq.isOpen} : faq));
    }

    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "What is Safe Nest?",
            answer: "Safe Nest is a platform that bridges the gap between tenants and landlords by creating a seamless home acquiring experience for every home aspirant.",
            isOpen: false
        },
        {
            id: 2,
            question: "How does Safe Nest work?",
            answer: "Safe Nest works by connecting tenants and landlords through a user-friendly platform that simplifies the home renting and buying process.",
            isOpen: false
        },
        {
            id: 3,
            question: "Is Safe Nest secure?",
            answer: "Yes, Safe Nest prioritizes the security and privacy of its users by implementing robust security measures and data protection protocols.",
            isOpen: false
        },
        {
            id: 4,
            question: "Can Safe Nest suit my budget?",
            answer: "Safe Nest offers flexible pricing plans to accommodate different budgets, ensuring that everyone can find a suitable home solution."
        }
    ]);
  return (
    <div className='bg-white flex md:flex-row flex-col md:gap-0 gap-6 md:p-20 p-8 font-[Inter] items-center '>
      <h2 className='text-[#1E40AF] md:text-5xl text-2xl font-bold md:w-1/2 text-center'>FAQS</h2>

      <div className='md:w-1/2 w-full'>
        {faqs.map(faq => (
            <div key={faq.id} className='mb-4 p-4 rounded-lg bg-[#EFF6FF]'>
                <div className='flex justify-between items-center'>
                    <h3 className='md:font-semibold mb-2 md:text-lg'>{faq.question}</h3>

                    <div>
                        {faq.isOpen ? (
                            <FaChevronUp onClick={() => showAnswer(faq.id)} className='cursor-pointer' />
                        ) : (
                            <FaChevronDown onClick={() => showAnswer(faq.id)} className='cursor-pointer' />
                        )}
                    </div>
                </div>
                
                {faq.isOpen && <p className='mt-2 transition-all duration-700'>{faq.answer}</p>}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs
