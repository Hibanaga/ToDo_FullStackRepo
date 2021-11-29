interface ILoginProp {
  username: string;
  password: string;
}

interface IRegisterProp {
  email: string;
  avatar: string;
  password: string;
  confirmPassword?: string;
}

export { ILoginProp, IRegisterProp };
