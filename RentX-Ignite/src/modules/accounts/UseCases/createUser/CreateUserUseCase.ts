import { hash, genSalt } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErros";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepositores";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("userRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExist = await this.userRepository.findByEamil(email);

    if (emailAlreadyExist) {
      throw new AppError("User with this email already exist");
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
