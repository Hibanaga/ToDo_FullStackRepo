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
  _v: number;
}

interface IRenderProp {
  item: IToDoMap;
  index: number;
  separators: {};
}

interface IToDoElement {
  _id: string;
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isComplete: boolean;
  _v?: number;
  token: string | null | undefined;

  onEditToDosHandler: (_id: string) => void;
  onDeleteToDosHandler: (_id: string, token: string | null | undefined) => void;
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

export { IToDo, IToDoElement, IRoute, IToDoMap, IRenderProp, IQueryKeyProp };
