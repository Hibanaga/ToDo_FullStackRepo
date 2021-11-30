import React from "react";
import { Formik } from "formik";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ToDoValidationScheme } from "../validation/validation.scheme";
import { IToDo } from "../../../types/todos.type";
import FormInputElement from "./actions/FormInputElement";
import FormCheckboxElement from "./actions/FormCheckboxElement";

interface IStateProp {
  state: IToDo;
  option?: string;

  onSubmitFormHandler: ({}: IToDo) => void;
}

const FormTodo = ({ onSubmitFormHandler, state, option }: IStateProp) => {
  return (
    <Formik
      initialValues={state}
      validationSchema={ToDoValidationScheme}
      onSubmit={(values: IToDo) => onSubmitFormHandler(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <View style={styles.container}>
          <FormInputElement
            title={"Title"}
            propName={"title"}
            error={errors.title}
            value={values.title}
            onHandleChange={handleChange}
          />

          <FormInputElement
            title={"Description"}
            propName={"description"}
            error={errors.description}
            value={values.description}
            onHandleChange={handleChange}
          />

          <FormInputElement
            title={"Year"}
            propName={"year"}
            error={errors.year}
            value={String(values.year)}
            onHandleChange={handleChange}
          />

          <View style={styles.wrapperCheckbox}>
            <FormCheckboxElement
              title={"Public"}
              value={values.isPublic}
              error={errors.isPublic}
              propName={"isPublic"}
              onSetFieldValue={setFieldValue}
            />

            <FormCheckboxElement
              title={"Completed"}
              value={values.isComplete}
              error={errors.isComplete}
              propName={"isComplete"}
              onSetFieldValue={setFieldValue}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={handleSubmit as any}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>
              {option === "edit" ? "edit" : "create"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  wrapperCheckbox: {
    marginTop: 32,
  },
  buttonSubmit: {
    borderWidth: 1,
    borderColor: "#333",
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 24,
  },
  buttonText: {
    textAlign: "center",
    color: "#333",
    fontSize: 16,
  },
});

export default FormTodo;
