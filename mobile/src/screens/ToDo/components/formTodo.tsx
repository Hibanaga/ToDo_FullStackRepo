import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { ToDoValidationScheme } from "../validation/validation.scheme";
import { IToDo } from "../types/todos.type";
import ErrorNotification from "./actions/ErrorNotification";

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
          <View>
            <Text style={styles["subTitle"]}>Title</Text>

            {/* {errors.title && (
              <Text style={styles.errorText}>{errors.title}</Text>
            )} */}

            <ErrorNotification errorMessage={errors.title} />

            <TextInput
              style={styles["input"]}
              onChangeText={handleChange("title")}
              value={values["title"]}
            />
          </View>

          <View>
            <Text style={styles.subTitle}>Description</Text>

            <ErrorNotification errorMessage={errors.description} />
            <TextInput
              style={styles.inputTextArea}
              numberOfLines={4}
              onChangeText={handleChange("description")}
              multiline
              value={values.description}
            />
          </View>

          <View>
            <Text style={styles.subTitle}>Year</Text>

            <ErrorNotification errorMessage={errors.year} />

            <TextInput
              style={styles.input}
              keyboardType={"numeric"}
              onChangeText={handleChange("year")}
              value={String(values.year)}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Public</Text>

            <ErrorNotification errorMessage={errors.isPublic} />
            <CheckBox
              value={values.isPublic}
              onChange={() => setFieldValue("isPublic", !values.isComplete)}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Completed</Text>

            <ErrorNotification errorMessage={errors.isComplete} />
            <CheckBox
              value={values.isComplete}
              onChange={() => setFieldValue("isComplete", !values.isComplete)}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => handleSubmit()}
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
  subTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#333",
    marginLeft: 16,
    borderRadius: 12,
  },
  inputTextArea: {
    marginLeft: 16,
    textAlignVertical: "top",
    height: 100,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    marginTop: 16,
  },
  checkboxContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
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
