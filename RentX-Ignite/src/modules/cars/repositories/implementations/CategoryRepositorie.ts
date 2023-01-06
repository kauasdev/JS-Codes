import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

/*
    DTO => Data transfer object

    Objeto responsável pela tranferênci de dados entre classes
*/
class CategoryRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // private static INSTANCE: CategoryRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoryRepository {
  //   if (!CategoryRepository.INSTANCE) {
  //     CategoryRepository.INSTANCE = new CategoryRepository();
  //   }

  //   return CategoryRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // void => define que o tipo será uma função sem retorno
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  findByName(name: string): Promise<Category | undefined> {
    // SELECT * FROM categories WHERE name = "name"
    const category = this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
