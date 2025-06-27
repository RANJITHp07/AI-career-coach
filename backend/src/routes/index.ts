import { Router } from "express";
import industryRoutes from "./industry.route";

const router = Router();

router.use("/industry", industryRoutes);

export default router;
