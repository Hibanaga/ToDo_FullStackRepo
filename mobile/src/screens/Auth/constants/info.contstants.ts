import { ILoginProp, IRegisterProp } from "../../../types/user.type";

const initialStateLogin: ILoginProp = {
  email: "123@gmail.com",
  password: "12345",
};

const initialStateRegister: IRegisterProp = {
  avatar: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export { initialStateLogin, initialStateRegister };
