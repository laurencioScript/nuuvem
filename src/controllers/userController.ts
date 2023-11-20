import { Request, Response } from "express";
import UserModel from "../models/userModel";

class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserModel.getAllUsers();
      res.status(200).send({
        status: "success",
        data: {
          users,
        },
      });
    } catch (error) {
      res.send({
        status: "error",
        data: {
          error,
        },
      });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserModel.getUserById(req.params.id);
      res.status(200).send({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      res.send({
        status: "error",
        data: {
          error,
        },
      });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      
      if(!body){
        return
      }
      const user = await UserModel.createUser(body);
      res.status(201).send({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
        
      res.send({
        status: "error",
        data: {
          error,
        },
      });
    }
  }
}

export default UserController;
