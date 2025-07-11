import { Router } from "express";
import industryRoutes from "./industry.route";
import quizRoutes from "./quiz.route";
import userRoutes from "./user.route";



const router = Router();

router.use("/industry", industryRoutes);
router.use("/quiz", quizRoutes)
router.use('/user', userRoutes)

export default router;
