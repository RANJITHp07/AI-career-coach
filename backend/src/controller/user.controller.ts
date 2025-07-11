import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service";
import { successResponse } from "@core/utils"

export class UserController {
    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(200).json(successResponse("User created successfully", user))
        } catch (error) {
            next()
        }
    }


    async completeProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { clerkUserId, ...rest } = req.body
            const user = await this.userService.completeProfile(clerkUserId, rest);
            res.status(200).json(successResponse("User data updated successfully", user))
        } catch (error) {
            console.log(error)
            next()
        }
    }


}