import { compare } from "bcryptjs";
import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErros";
import { IUserRepository } from "../../repositories/IUserRepositores";

config();

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    driver_license: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("userRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEamil(email);

    if (!user) {
      throw new AppError("Email or Password incorrect!", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or Password incorrect!", 401);
    }

    const jwtSecret = process.env.JWT_SECRET_KEY;

    const token = sign({}, `${jwtSecret}`, {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: user.name,
        email: user.email,
        driver_license: user.driver_license,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
