import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppErros";
import { ISpecificationsRepository } from "../../repositories/ISpecificatonRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("specificationRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyexist =
      await this.specificationsRepository.findByName(name);
    if (specificationAlreadyexist) {
      throw new AppError("Specification already exists!");
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
