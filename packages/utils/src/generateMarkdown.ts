type Profile = {
    name: string
    email: string
    phone: string
    linkedIn: string
    twitter?: string
    professionalSummary: string
    skills: string[] // now array
}

type Experience = {
    companyTitle: string
    companyName: string
    startDate: Date
    endDate?: Date
    description: string
}

type Project = {
    name: string
    technologies: string
    link: string
    startDate: Date
    endDate: Date
    description: string
}

export function generateMarkdownResume({
    profile,
    experiences,
    projects,
}: {
    profile: Profile
    experiences: Experience[]
    projects: Project[]
}): string {
    const { name, email, phone, linkedIn, twitter, professionalSummary, skills } = profile

    const formatDate = (date: Date) =>
        date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

    return `
<h1 style="text-align: center; font-size: 28px; font-weight: bold;">${name}</h1>

<p style="text-align: center; font-size: 13px; margin-top: -10px;">
  <a href="mailto:${email}">${email}</a> | ${phone} | 
  <a href="${linkedIn}">LinkedIn</a>${twitter ? ` | <a href="${twitter}">Twitter</a>` : ''}
</p>

<hr style="border: none; border-top: 0.5px solid #ccc; margin: 16px 0;" />

<p style="font-size: 18px; font-weight: bold; margin-bottom: 4px;">Professional Summary</p>
<p style="font-size: 13px; margin-top: 0;">${professionalSummary}</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 16px 0;" />

<p style="font-size: 18px; font-weight: bold; margin-bottom: 4px;">Skills</p>
<p style="font-size: 13px; margin-top: 0;">${skills}</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 16px 0;" />

<p style="font-size: 18px; font-weight: bold; margin-bottom: 4px;">Experience</p>
${experiences
            .map(
                (exp) => `
<p style="font-size: 14px; font-weight: 600; margin-bottom: 2px;">
  ${exp.companyTitle}, ${exp.companyName}
</p>
<p style="font-size: 12px; margin: 0 0 4px 0;"><strong>Duration:</strong> ${formatDate(exp.startDate)} – ${exp.endDate ? formatDate(exp.endDate) : 'Present'}</p>
<p style="font-size: 13px; margin-top: 0;">${exp.description}</p>
`
            )
            .join('<br/>')}

<hr style="border: none; border-top: 1px solid #ccc; margin: 16px 0;" />

<p style="font-size: 18px; font-weight: bold; margin-bottom: 4px;">Projects</p>
${projects
            .map(
                (proj) => `
<p style="font-size: 14px; font-weight: 600; margin-bottom: 2px;">
  <a href="${proj.link}" target="_blank">${proj.name}</a>
</p>
<p style="font-size: 12px; margin: 0 0 2px 0;"><strong>Technologies:</strong> ${proj.technologies}</p>
<p style="font-size: 12px; margin: 0 0 4px 0;"><strong>Duration:</strong> ${formatDate(proj.startDate)} – ${formatDate(proj.endDate)}</p>
<p style="font-size: 13px; margin-top: 0;">${proj.description}</p>
`
            )
            .join('<br/>')}
`.trim()
}
