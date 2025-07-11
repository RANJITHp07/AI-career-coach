import { Form } from '@/components/ui/form'
import { coverLetterSchema } from '@core/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


function CoverLetterForm() {
    const form = useForm<z.infer<typeof coverLetterSchema>>({
        resolver: zodResolver(coverLetterSchema),
    })

    const onSubmit = () => {

    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-ful flex flex-col gap-5">

                </form>
            </Form>
        </div>
    )
}

export default CoverLetterForm
