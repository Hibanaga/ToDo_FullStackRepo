import { ILoginProp, IRegisterProp } from "../../../types/user.type";

const initialStateLogin: ILoginProp = {
  email: "",
  password: "",
};

const initialStateRegister: IRegisterProp = {
  avatar: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export { initialStateLogin, initialStateRegister };
