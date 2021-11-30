import { Response, Request, NextFunction, json } from "express";
import { Errors } from "../services/message.service.response";
import UserService from "../services/user.service";

const bcrypt = require("bcryptjs");

export class UserController {
  constructor(private userService: UserService) {}

  async register(_: Request, res: Response, next: NextFunction) {
    //@_.body:
    //email: string
    //password: string,
    // avatar: string,
    const { password, email } = _.body;
    try {
      //check existing user with email
      const existEmail = await this.userService.isExist(email, "email");
      // throw error is user already exist
      if (existEmail === true) throw Errors.BadRequest;
      //function generate hashed password
      const hashPassword = await bcrypt.hash(password, 8);
      //create new user with hashed password
      const itemToCreate = { ..._.body, password: hashPassword };
      //save new user to DB
      const { email: generatedEmail, _id } = await this.userService.save(
        itemToCreate
      );
      //generate token of user
      const token = this.userService.generateToken(generatedEmail, _id);
      //send token to client
      res.json({ token });
    } catch (error: any) {
      return res.json({ ...error, title: "User already exists" });
    }
  }

  async login(_: Request, res: Response, next: NextFunction) {
    //@_.body:
    //email: string
    //password: string,
    // avatar: string,
    const { password, email } = _.body;
    try {
      //find user with selected email
      const user = await this.userService.findOne(email);
      //return message if user doen't exist
      if (!user) throw { message: "notFound" };
      //validate password
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      //check is password exists
      if (!isPasswordValid) throw { message: "Invalid Password" };
      const token = this.userService.generateToken(user.email, user._id);
      res.json({
        token,
      });
    } catch ({ message }) {
      return message === "notFound"
        ? res.json({
            ...Errors.NotFound,
            title: "Not Found user with this email",
          })
        : res.json({
            ...Errors.BadRequest,
            title: "Invalid Password",
          });
    }
  }

  async auth(_: Request, res: Response) {
    res.status(200).json({ message: "Success" });
  }
}

const useController = new UserController(new UserService());
export default useController;
