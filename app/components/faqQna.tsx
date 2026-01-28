"use client"
import {useState} from "react"

interface Faqs {
    question: string
    answer: string
}

const faqs: Faqs[] = [
    {
        question: "What is Incredible?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "What makes Incredible different from other AI Assistants?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "Is my data secure?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "How do you prevent hallucinations?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "Can Incredible take multiple actions at once?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "What kind of task can Incredible handle?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "Can Incredible work with my existing data?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "Is there a free trial?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "How do I get help?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    },
    {
        question: "What apps and tools are integrated?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms.",
    }
]

const FaqQna = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="w-full h-full flex flex-col justify-center gap-y-5">
            {faqs.map((item, index) => {
                const isOpen = openIndex === index
                return (
                    <div key={index} className={`border-b border-gray-300/60 ${!isOpen ? "pb-3" : "pb-0"}`}>
                        <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex justify-between items-center text-left">
                            <span className="font-medium text-lg font-sans text-[24]">{item.question}</span>
                            <span className={`transition-transform ${isOpen ? "rotate-180 bg-black" : "bg-gray-300/50"} h-8 w-8 rounded-full flex items-center justify-center`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={isOpen ? "#FFF" : "#000"}><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z"/></svg>
                            </span>
                        </button>

                        {isOpen && (
                            <div className="my-3 text-black/70 font-sans text-[16px]">
                                <div>
                                    {item.answer}
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default FaqQna