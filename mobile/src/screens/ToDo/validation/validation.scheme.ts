import * as yup from "yup";

const ToDoValidationScheme = yup.object().shape({
  title: yup
    .string()
    .min(3, "min. 3 characters")
    .max(10, "max. 10 characters")
    .required(),
  description: yup
    .string()
    .min(3, "min. 3 characters")
    .max(255, "max. 255 charakters")
    .required(),
  year: yup.number().min(2021, "min. 2021").max(2100, "max 2100").required(),
  isPublic: yup.boolean().required(),
  isComplete: yup.boolean().required(),
});

export { ToDoValidationScheme };
