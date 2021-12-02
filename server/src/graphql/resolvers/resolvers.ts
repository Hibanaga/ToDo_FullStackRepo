import Todo from "../../models/ToDo";

module.exports = {
  Query: {
    allToDos: async () => {
      return await Todo.find();
    },
    getToDo: async ({ _id }: { _id: string }) => {
      return await Todo.findById(_id);
    },
  },

  Mutation: {
    createToDo: ({ data }: any) => {
      console.log(data);
      return data;
    },
    updateToDo: ({ _id, data }: any) => {
      console.log(_id);
      console.log(data);
      return data;
    },
    deleteToDo: async ({ _id }: any) => {
      return await Todo.findById(_id);
    },
  },
};
