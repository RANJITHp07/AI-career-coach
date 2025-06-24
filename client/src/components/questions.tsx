import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { faqs } from '@/lib/constant/faq'

function Questions() {
    return (
        <div className='text-center bg-background py-12 p-2'>
            <h2 className='text-3xl font-bold tracking-tighter text-center mb-2'>Frequently Asked Questions</h2>
            <p className='text-muted-foreground'>Find answers to common questions about our platform</p>

            <div className='max-w-3xl mt-12 mx-auto'>
                <Accordion type="single" collapsible>
                    {
                        faqs.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="no-underline hover:no-underline focus:no-underline text-sm">{item.question}</AccordionTrigger>
                                <AccordionContent className='text-start'>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>

        </div>
    )
}

export default Questions
