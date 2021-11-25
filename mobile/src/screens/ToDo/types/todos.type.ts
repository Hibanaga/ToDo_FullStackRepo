interface IToDo {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isComplete: boolean;
  _id: string;
  __v?: number;
}

interface IToDoElement {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isComplete: boolean;
  _id: string;
  onEditToDosHandler: (_id: string) => void;
  onDeleteToDosHandler: (_id: string) => void;
}

export { IToDo, IToDoElement };
