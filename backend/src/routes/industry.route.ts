import { Router } from "express";
import { IndustryController } from "../controller/industry.controller";
import { IndustryService } from "src/service/industry.service";

const router = Router();
const industryService = new IndustryService()
const industryController = new IndustryController(industryService);

router.get("/insight", (req, res, next) => industryController.industryInsight(req, res, next));
router.get("/improvement", (req, res, next) => industryController.resumeImprovement(req, res, next));
router.post('/cover-letter', (req, res, next) => industryController.generateCoverLetter(req, res, next));
router.get('/cover-letter', (req, res, next) => industryController.fetchCoverLetter(req, res, next));
router.get('/cover-letter/:id', (req, res, next) => industryController.fetchOneCoverLetter(req, res, next));
router.delete('/cover-letter/:id', (req, res, next) => industryController.deleteCoverLetter(req, res, next));



export default router;
