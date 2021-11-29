import * as yup from "yup";

const LoginValidateScheme = yup.object().shape({
  username: yup
    .string()
    .min(3, "min. 3 characters")
    .max(25, "max. 25 characters")
    .required(),
  password: yup.string(),
});

const RegisterValidateScheme = yup.object().shape({
  avatar: yup.string(),
  email: yup.string(),
});

export { LoginValidateScheme, RegisterValidateScheme };
