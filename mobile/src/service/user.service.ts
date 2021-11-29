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
  // this._storeData(data.data.token)
  async login(data: ILoginProp) {
    return await this.instance.post("login", data).then((data: any) => {
      if (data.data.token === undefined) {
        return data.data;
      } else {
        this._storeData(data.data.token);
        return data.data.token;
      }
    });
  }

  async register(data: IRegisterProp) {
    return await this.instance.post("register", data).then((data: any) => {
      if (data.data.token === undefined) {
        return data.data;
      } else {
        this._storeData(data.data.token);
        return data.data.token;
      }
    });
  }
}

const instance = new UserService();
export default instance;
