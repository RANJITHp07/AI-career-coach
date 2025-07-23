export const apis = {
    //profile
    "dashboard": "/industry/insight",
    "profile": "/user",

    //industry
    "cover-letter": "/industry/cover-letter",
    "get-cover-letter": (id: string) => `/industry/cover-letter/${id}`,
    "rephaseDescription": "/industry/improvement",
    "insight": "/industry/insight",

    //quiz
    "stats": '/quiz/stats',
    "history": '/quiz/history',
    "analysis": "/quiz/analysis",
    "createQuiz": "/quiz"


}