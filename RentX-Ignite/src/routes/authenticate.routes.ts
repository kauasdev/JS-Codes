import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/UseCases/authenticateUser/AuthenticateUserController";

const authRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authRouter.post("/session", authenticateUserController.handle);

export { authRouter };
