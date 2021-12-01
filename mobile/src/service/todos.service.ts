import { IToDo } from "../types/todos.type";
import axios from "axios";

class ToDoService {
  instance: any;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://192.168.0.21:5000/api/todos",
    });
  }
  async gets({ queryKey }: any) {
    // props
    const currentPage: number = queryKey[1].currentPage;
    const sizePage: number = queryKey[1].limit;
    const options: { isComplete?: boolean; isPublic?: boolean } =
      queryKey[1].options;
    const isExist: boolean = queryKey[1].isExist;
    return (
      isExist &&
      (await this.instance({
        method: "get",
        url: "/getAll",
        params: {
          current: currentPage,
          size: sizePage,
          options: options,
        },
        headers: { Authorization: `Bearer ${queryKey[1].token}` },
      }).then((res: { data: { data: [IToDo] } }) => res.data.data))
    );
  }

  async get({ queryKey }: any) {
    const isExist: boolean = queryKey[1].isExist;
    const _id: string = queryKey[1]._id;
    const token: string | null | undefined = queryKey[1].token;
    return (
      isExist &&
      this.instance({
        method: "get",
        params: { _id: _id },
        headers: { Authorization: `Bearer ${token}` },
      }).then((res: { data: { data: IToDo } }) => res.data.data)
    );
  }

  async add(data: IToDo, token: string | null | undefined) {
    return await this.instance({
      method: "post",
      data: {
        ...data,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  update(data: IToDo, token: string | null | undefined) {
    return this.instance({
      method: "put",
      data: {
        ...data,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async remove(_id: string, token: string | null | undefined) {
    return await this.instance({
      method: "delete",
      params: { _id },
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const instance = new ToDoService();
export default instance;
