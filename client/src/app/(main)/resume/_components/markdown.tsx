'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { generateMarkdownResume } from '@core/utils' // <-- adjust path if needed

// Dynamically import the MarkdownEditor to avoid SSR issues
const MarkdownEditor = dynamic(
    () => import('@uiw/react-md-editor').then(mod => mod.default),
    { ssr: false }
)

// type ResumePreviewProps = {
//     profile: ReturnType<typeof getSampleProfile>
//     experiences: ReturnType<typeof getSampleExperiences>
//     projects: ReturnType<typeof getSampleProjects>
// }

export default function ResumePreview({ profile, experiences, projects }: any) {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        const md = generateMarkdownResume({ profile, experiences, projects })
        setMarkdown(md)
    }, [profile, experiences, projects])

    return (
        <div className="p-4">
            <MarkdownEditor
                value={markdown}
                // visible={true}
                height="600px"
                // enablePreview
                // toolbars={false}
                enableScroll={true}
            />
        </div>
    )
}
