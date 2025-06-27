import { TQuizQuestion } from '@/types/quiz'
import { create } from 'zustand'

type StoreState = {
    quizVisible: boolean,
    loading: boolean,
    quizData: { questions: TQuizQuestion[] },
    setLoading: (loading: boolean) => void,
    setQuizData: (data: { questions: TQuizQuestion[] }) => void,
    showQuiz: () => void
}

export const useQuizStore = create<StoreState>((set) => ({
    quizVisible: false,
    loading: false,
    quizData: { questions: [] },
    setLoading: (loading: boolean) => set({ loading }),
    setQuizData: (data: { questions: TQuizQuestion[] }) => set({ quizData: data, quizVisible: true }),
    showQuiz: () => set({ quizVisible: true }),
}))
