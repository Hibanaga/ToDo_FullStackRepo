interface IToDo {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isComplete: boolean;
  _id?: string;
  __v?: number;
}

interface IToDoMap {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isComplete: boolean;
  _id: string;
}

interface IToDoElement {
  _id: string;
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isComplete: boolean;

  onEditToDosHandler: (_id: string) => void;
  onDeleteToDosHandler: (_id: string) => void;
}

interface IRoute {
  key: string;
  name: string;
  path: undefined;
  params: {
    _id: string;
  };
}

interface IQueryKeyProp {
  queryKey: any;
}

export { IToDo, IToDoElement, IRoute, IToDoMap, IQueryKeyProp };
