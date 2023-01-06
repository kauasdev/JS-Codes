import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppErros";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayloadJWT {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authorization.split(" ");

  const jwtSecret = process.env.JWT_SECRET_KEY;

  try {
    const { sub: user_id } = verify(token, `${jwtSecret}`) as IPayloadJWT;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    request.user = {
      id: user_id,
    };

    next();

    if (!user) {
      throw new AppError("User does not exist", 404);
    }
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
