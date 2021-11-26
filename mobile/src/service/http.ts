import axios from "axios";
import { IToDo } from "../screens/ToDo/types/todos.type";

class HttpService {
  instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://192.168.0.21:5000/api",
    });
  }

  gets(current: number, size: number) {
    return this.instance
      .get(`/todos/getAll?current=${current}&size=${size}`)
      .then((res: { data: { data: [IToDo] } }) => res.data.data);
  }

  get(_id: string) {
    const query: string = `?_id=${_id}`;
    return this.instance
      .get(`/todos${query}`, { _id })
      .then((res: { data: { data: IToDo } }) => res.data.data);
  }

  add(data: IToDo) {
    return this.instance.post("/todos", data);
  }

  update(data: IToDo) {
    return this.instance.put("/todos", data);
  }

  remove(_id: string) {
    return this.instance.delete(`/todos?_id=${_id}`);
  }
}

const instance = new HttpService();
export default instance;
