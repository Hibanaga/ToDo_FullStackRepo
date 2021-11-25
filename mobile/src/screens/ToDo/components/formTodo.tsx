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

interface stateProp {
  state?: any;
  option?: string;

  onSubmitFormHandler: ({}: any) => void;
}

export default function formTodo({
  onSubmitFormHandler,
  state,
  option,
}: stateProp) {
  return (
    <Formik
      initialValues={
        option === "edit"
          ? state
          : {
              title: "",
              description: "",
              year: 2021,
              isPublic: false,
              isComplete: false,
            }
      }
      validationSchema={ToDoValidationScheme}
      onSubmit={(values) => onSubmitFormHandler(values)}
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

            {errors.title && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.title}</Text>
            )}
            <TextInput
              style={styles["input"]}
              onChangeText={handleChange("title")}
              value={values["title"]}
            />
          </View>

          <View>
            <Text style={styles.subTitle}>Description</Text>
            {errors.description && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.description}
              </Text>
            )}
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

            {errors.year && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.description}
              </Text>
            )}

            <TextInput
              style={styles.input}
              keyboardType={"numeric"}
              onChangeText={handleChange("year")}
              value={String(values.year)}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Public</Text>

            {errors.isPublic && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.isPublic}
              </Text>
            )}
            <CheckBox
              value={values.isPublic}
              onChange={(nextValue: any) =>
                setFieldValue("isPublic", nextValue.nativeEvent.value)
              }
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Completed</Text>
            {errors.isComplete && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.isComplete}
              </Text>
            )}
            <CheckBox
              value={values.isComplete}
              onChange={(nextValue: any) =>
                setFieldValue("isComplete", nextValue.nativeEvent.value)
              }
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
}

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
