import { Router } from "express";
import { IndustryController } from "../controller/industry.controller";
import { IndustryService } from "src/service/industry.service";

const router = Router();
const industryService = new IndustryService()
const industryController = new IndustryController(industryService);

router.get("/insight", (req, res, next) => industryController.industryInsight(req, res, next));

export default router;
