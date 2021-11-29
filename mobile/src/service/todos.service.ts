import { IToDo, IQueryKeyProp } from "../types/todos.type";
import axios from "axios";
// import StorageService from "./storage.service";

class ToDoService {
  instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://192.168.0.21:5000/api/todos",
    });
  }

  async gets({ queryKey }: IQueryKeyProp) {
    return await this.instance
      .get(
        `/getAll?current=${queryKey[1].currentPage}&size=${queryKey[1].limit}`
      )
      .then((res: { data: { data: [IToDo] } }) => res.data.data);
  }

  get({ queryKey }: IQueryKeyProp) {
    return this.instance
      .get(`?_id=${queryKey[1]._id}`, { _id: queryKey[1]._id })
      .then((res: { data: { data: IToDo } }) => res.data.data);
  }

  add(data: IToDo) {
    return this.instance.post("", data);
  }

  update(data: IToDo) {
    return this.instance.put("", data);
  }

  remove(_id: string) {
    return this.instance.delete(`?_id=${_id}`);
  }
}

const instance = new ToDoService();
export default instance;
