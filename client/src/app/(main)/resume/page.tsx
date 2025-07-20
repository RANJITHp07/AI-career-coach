import { Button } from '@/components/ui/button'
import { Download, Save } from 'lucide-react'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeForm from './_components/resume-form'
import ResumePreview from './_components/markdown'
const markdown = {
    profile: {
        name: "Ranjith P",
        email: "ranjith@example.com",
        phone: "+919876543210",
        linkedIn: "https://linkedin.com/in/ranjith",
        twitter: "https://twitter.com/ranjith_dev",
        professionalSummary: "Experienced software engineer specializing in full-stack web development Experienced software engineer specializing in full-stack web development... Experienced software engineer specializing in full-stack web development...",
        skills: "JavaScript, TypeScript, React, Node.js, MongoDB, GraphQL"
    },
    experiences: [
        {
            companyTitle: "Senior Developer",
            companyName: "Tech Corp",
            startDate: new Date("2020-01-01"),
            endDate: new Date("2023-08-01"),
            description: "Led a team of 5 engineers to deliver scalable web applications..."
        }
    ],
    projects: [
        {
            name: "Portfolio Builder",
            technologies: "React, TailwindCSS, Vite",
            link: "https://github.com/ranjith/portfolio-builder",
            startDate: new Date("2023-01-01"),
            endDate: new Date("2023-06-01"),
            description: "An open-source portfolio builder for developers using dynamic JSON schema input..."
        }
    ]
}

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
                <TabsContent value="resume"><ResumePreview profile={markdown.profile} experiences={markdown.experiences} projects={markdown.projects} /> </TabsContent>
            </Tabs>
        </div>
    )
}

export default Resume
