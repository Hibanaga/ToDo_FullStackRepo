import { Model, model, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isCompleted: boolean;
}

const todoSchema: Schema = new Schema({
  title: {
    unique: true,
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
  },
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;
