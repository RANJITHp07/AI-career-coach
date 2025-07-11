import { Router } from "express";
import { UserService } from "src/service/user.service";
import { UserController } from "src/controller/user.controller";

const router = Router();
const userService = new UserService()
const userController = new UserController(userService);

router.put("/", (req, res, next) => {
    userController.completeProfile(req, res, next);
});

export default router;
