import axios from "axios";
import { IToDo } from "../screens/ToDo/types/todos.type";

class ToDoService {
  instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://192.168.0.21:5000/api/todos",
    });
  }

  gets(current: number, size: number) {
    const query: string = `?current=${current}&size=${size}`;
    const result = this.instance
      .get(`/getAll${query}`)
      .then((res: { data: any }) => res.data.data);
    return result;
  }

  get(_id: string) {
    const query: string = `?_id=${_id}`;
    return this.instance
      .get(`${query}`, { _id })
      .then((res: { data: any }) => res.data.data);
  }

  add(data: IToDo) {
    return this.instance.post("", data);
  }

  update(data: IToDo) {
    return this.instance.put("", data);
  }

  remove(_id: string) {
    const query: string = `?_id=${_id}`;
    return this.instance.delete(`${query}`);
  }
}

const instance = new ToDoService();
export default instance;
