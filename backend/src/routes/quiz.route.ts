import { Router } from "express";
import { QuizController } from "../controller/quiz.controller";
import { QuizService } from "src/service/quiz.service";

const router = Router();
const quizService = new QuizService()
const quizController = new QuizController(quizService);

router.get("/", (req, res, next) => quizController.createQuiz(req, res, next));
router.post("/", (req, res, next) => quizController.submitQuiz(req, res, next));
router.get("/stats", (req, res, next) => quizController.getQuizStats(req, res, next));


export default router;
