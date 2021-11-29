import axios from "axios";
import { ILoginProp, IRegisterProp } from "../types/user.type";
import StorageService from "./storage.service";
// http://192.168.0.21:5000/api/user/

class UserService extends StorageService {
  instance: any;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/user/",
    });
  }

  login(data: ILoginProp) {
    return this.instance
      .post("login", data)
      .then((data: any) => console.log(data));
  }

  async register(data: IRegisterProp) {
    return await this.instance
      .post("register", data)
      .then((data: any) => this._storeData(data.data.token));
  }
}

const instance = new UserService();
export default instance;
