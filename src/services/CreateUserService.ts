import IUserRepository from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute({ name, email, password  }: any): Promise<any> {
    const passwordHash = await hash(password, 8);
    const newUser = await this.userRepository.create({
        password: passwordHash, name, email
    });

    return newUser;
  }
}
