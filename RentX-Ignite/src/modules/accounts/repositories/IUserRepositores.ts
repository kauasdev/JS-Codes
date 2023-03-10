import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEamil(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}

export { IUserRepository };
