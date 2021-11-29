import { IToDo, IQueryKeyProp } from "../types/todos.type";
import axios from "axios";

class ToDoService {
  instance: any;
  token: string | undefined;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/todos",
    });
  }

  async gets({ queryKey }: IQueryKeyProp) {
    return (
      queryKey[1].isExist &&
      (await this.instance
        .get(
          `/getAll?current=${queryKey[1].currentPage}&size=${queryKey[1].limit}`,
          {
            headers: {
              Authorization: `Bearer ${queryKey[1].token}`,
            },
          }
        )
        .then((res: { data: { data: [IToDo] } }) => res.data.data))
    );
  }

  async get({ queryKey }: IQueryKeyProp) {
    return (
      queryKey[1].isExist &&
      (await this.instance
        .get(`?_id=${queryKey[1]._id}`, {
          headers: {
            Authorization: `Bearer ${queryKey[1].token}`,
          },
        })
        .then((res: { data: { data: IToDo } }) => res.data.data))
    );
  }

  async add(data: IToDo) {
    return this.instance.post("", data);
  }

  update(data: IToDo, token: string | null | undefined) {
    return this.instance.put("", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        ...data,
      },
    });
  }

  async remove(_id: string, token: string | null | undefined) {
    return await this.instance.delete(`?_id=${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const instance = new ToDoService();
export default instance;
