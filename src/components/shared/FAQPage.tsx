"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ } from "@/types/faq"

export default function FAQPage({ faqs }: { faqs: FAQ[] }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#f9fafb]">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        {faqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq._id} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No FAQs available at the moment. Please check back later.
          </div>
        )}
      </div>
    </main>
  )
}
