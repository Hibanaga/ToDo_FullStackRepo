import * as yup from "yup";

const LoginValidateScheme = yup.object().shape({
  email: yup
    .string()
    .min(3, "min. 3 characters")
    .max(25, "max. 25 characters")
    .required(),
  password: yup.string(),
});

const RegisterValidateScheme = yup.object().shape({
  avatar: yup.string().min(3).max(25),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("email is Required"),
  password: yup
    .string()
    .min(3, "min. 3 characters")
    .max(25, "max. 25 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match"),
});

export { LoginValidateScheme, RegisterValidateScheme };
