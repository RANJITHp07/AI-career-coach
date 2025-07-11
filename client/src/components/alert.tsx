'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useQuizStore } from "@/store/quizStore"

type AlertDialogProps = {
    children: React.ReactNode
    message?: string
    subMessage?: string
    onCancelClick?: () => void
    onContinueClick?: () => void
}

export function Alert({
    children,
    message = "Are you absolutely sure?",
    subMessage = "This action cannot be undone.",
    onCancelClick,
    onContinueClick,
}: AlertDialogProps) {
    const { isSubmitted } = useQuizStore()
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{message}</AlertDialogTitle>
                    <AlertDialogDescription>{subMessage}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancelClick}>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={isSubmitted} onClick={onContinueClick}>{isSubmitted ? "Submitting..." : "Continue"}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
