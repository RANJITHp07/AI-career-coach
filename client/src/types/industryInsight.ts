export type TIndustryInsight = {
    salaryRanges: {
        role: string
        min: number
        max: number
        median: number
        location: string
    }[]
    growthRate: number
    demandLevel: string
    topSkills: string[]
    marketOutlook: string
    keyTrends: string[]
    recommendedSkills: string[]
}
