import { Button } from '@/components/ui/button'
import { Download, Save } from 'lucide-react'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeForm from './_components/resume-form'

function Resume() {
    return (
        <div className='py-24 p-2'>
            <div className='md:flex justify-between items-center mb-2'>
                <h2 className='text-6xl font-bold gradient-title'>Resume Builder</h2>
                <div className='flex gap-2 my-4 md:my-0'>
                    <Button variant="destructive"><Save />  Save</Button>
                    <Button><Download /> Download PDF</Button>
                </div>
            </div>
            <Tabs defaultValue="form" className="w-full">
                <TabsList>
                    <TabsTrigger value="form">Form</TabsTrigger>
                    <TabsTrigger value="resume">Resume</TabsTrigger>
                </TabsList>
                <TabsContent value="form"><ResumeForm /></TabsContent>
                <TabsContent value="resume">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}

export default Resume
