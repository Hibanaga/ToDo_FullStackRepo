import axios from "axios";
import { ILoginProp, IRegisterProp } from "../types/user.type";
import StorageService from "./storage.service";

class UserService extends StorageService {
  instance: any;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "http://192.168.0.21:5000/api/user/",
    });
  }
  async login(data: ILoginProp) {
    return await this.instance({
      method: "post",
      url: "login",
      data: { ...data },
    }).then((data: { data: { token: string | undefined } }) => {
      if (data.data.token === undefined) {
        return data.data;
      } else {
        this._storeData(data.data.token);
        return data.data.token;
      }
    });
  }

  async register(data: IRegisterProp) {
    return await this.instance({
      method: "post",
      url: "register",
      data: { ...data },
    }).then((data: { data: { token: string | undefined } }) => {
      if (data.data.token === undefined) {
        return data.data;
      } else {
        this._storeData(data.data.token);
        return data.data.token;
      }
    });
  }

  async auth(token: string | null | undefined, isExist: boolean) {
    try {
      return (
        isExist &&
        (await this.instance({
          method: "get",
          url: "auth",
          headers: { Authorization: `Bearer ${token}` },
        }).then((data: any) => data.status))
      );
    } catch (error) {
      return 401;
    }
  }
}

const instance = new UserService();
export default instance;
