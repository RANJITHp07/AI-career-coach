import { Router } from "express";
import industryRoutes from "./industry.route";
import quizRoutes from "./quiz.route";


const router = Router();

router.use("/industry", industryRoutes);
router.use("/quiz", quizRoutes)

export default router;
