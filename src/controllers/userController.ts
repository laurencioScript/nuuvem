import { Request, Response } from "express";
import { injectable } from "tsyringe";
import CreateUserService from "../services/CreateUserService";
import { HTTP } from "../utils/constants";

@injectable()
export default class UserController {
  constructor(private createUserService: CreateUserService){}

  public async create(req: Request, res: Response): Promise<void>{
    const { name, email, password } = req.body;

    const user = await this.createUserService.execute({
      name, email, password 
    });

    res.status(HTTP.Created).json({status: "success", data: { user}});
  }
}
