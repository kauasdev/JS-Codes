import { Router } from "express";
import multer from "multer";

import upload from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";

const userRoutes = Router();

const uploadConfig = upload;
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUserController.handle);

userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { userRoutes };
