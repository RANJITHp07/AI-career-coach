import { TQuizQuestion } from '@/types/quiz'
import { create } from 'zustand'

type StoreState = {
    quizVisible: boolean
    loading: boolean
    quizData: { questions: TQuizQuestion[] }
    userSelectedAnswers: string[]
    isSubmitted: boolean
    result: {
        marks: number
        improvementTip?: string
        isCompleted: boolean
    }
    setLoading: (loading: boolean) => void
    setQuizData: (data: { questions: TQuizQuestion[] }) => void
    showQuiz: () => void
    setUserSelectedAnswers: (answer: string, index: number) => void
    setisSubmitted: (isSubmitted: boolean) => void
    setResult: (result: {
        marks: number
        improvementTip?: string
        isCompleted: boolean
    }) => void
}

export const useQuizStore = create<StoreState>((set) => ({
    quizVisible: false,
    loading: false,
    quizData: { questions: [] },
    userSelectedAnswers: Array(10).fill(""),
    isSubmitted: false,
    result: {
        marks: 0,
        improvementTip: '',
        isCompleted: false
    },
    setUserSelectedAnswers: (answer: string, index: number) =>
        set((state) => ({
            userSelectedAnswers: state.userSelectedAnswers.map((a, i) =>
                i === index ? answer : a
            ),
        })),
    setLoading: (loading: boolean) => set({ loading }),
    setisSubmitted: (isSubmitted: boolean) => set({ isSubmitted }),
    setQuizData: (data: { questions: TQuizQuestion[] }) =>
        set({
            quizData: data,
            quizVisible: true,
            userSelectedAnswers: Array(data.questions.length).fill(''),
        }),
    showQuiz: () => set({ quizVisible: true }),
    setResult: (result) => set({ result }),
}))
