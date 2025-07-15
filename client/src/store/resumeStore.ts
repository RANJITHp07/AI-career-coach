import { ExperienceFormValues, EducationFormValues, ProjectFormValues } from '@core/validators'
import { create } from 'zustand'

type StoreState = {
    experience: ExperienceFormValues[]
    education: EducationFormValues[]
    projects: ProjectFormValues[]

    addExperience: boolean
    addEducation: boolean
    addProject: boolean

    setAddExperience: (value: boolean) => void
    setAddEducation: (value: boolean) => void
    setAddProject: (value: boolean) => void

    addExperienceEntry: (entry: ExperienceFormValues) => void
    removeExperienceEntry: (index: number) => void

    addEducationEntry: (entry: EducationFormValues) => void
    removeEducationEntry: (index: number) => void

    addProjectEntry: (entry: ProjectFormValues) => void
    removeProjectEntry: (index: number) => void
}

export const useResumeStore = create<StoreState>((set) => ({
    experience: [],
    education: [],
    projects: [],

    addExperience: false,
    addEducation: false,
    addProject: false,

    setAddExperience: (value) => set({ addExperience: value }),
    setAddEducation: (value) => set({ addEducation: value }),
    setAddProject: (value) => set({ addProject: value }),

    addExperienceEntry: (entry) =>
        set((state) => ({
            experience: [...state.experience, entry],
            addExperience: false,
        })),

    removeExperienceEntry: (index) =>
        set((state) => ({
            experience: state.experience.filter((_, i) => i !== index),
        })),

    addEducationEntry: (entry) =>
        set((state) => ({
            education: [...state.education, entry],
            addEducation: false,
        })),

    removeEducationEntry: (index) =>
        set((state) => ({
            education: state.education.filter((_, i) => i !== index),
        })),

    addProjectEntry: (entry) =>
        set((state) => ({
            projects: [...state.projects, entry],
            addProject: false,
        })),

    removeProjectEntry: (index) =>
        set((state) => ({
            projects: state.projects.filter((_, i) => i !== index),
        })),
}))
