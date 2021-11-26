import { IUser } from "./../models/User";
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "config";

export default class UserService {
  async save(data: IUser) {
    return await User.create(data);
  }
  async checkLogin() {}

  async findOne(email: string) {
    return await User.findOne({ email });
  }
  async isExist(checkItem: string, option: string) {
    return await User.exists({ [option]: checkItem });
  }

  generateToken(email: string, _id: string) {
    return jwt.sign({ email, _id }, config.get("jwtSecret"), {
      expiresIn: config.get("jwtExpiration"),
    });
  }
}
