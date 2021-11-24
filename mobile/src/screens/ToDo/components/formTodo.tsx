import React from "react";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface stateProp {
  onSubmitFormHandler: ({}: any) => void;
}

export default function formTodo({ onSubmitFormHandler }: stateProp) {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        year: 0,
        isPublic: false,
        isComplete: false,
      }}
      onSubmit={(values) => onSubmitFormHandler(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <View>
            <Text style={styles.subTitle}>Title</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("title")}
              value={values.title}
            />
          </View>

          <View>
            <Text style={styles.subTitle}>Description</Text>

            <TextInput
              style={styles.input}
              numberOfLines={4}
              onChangeText={handleChange("description")}
              value={values.description}
            />
          </View>

          <View>
            <Text style={styles.subTitle}>Year</Text>

            <TextInput
              style={styles.input}
              keyboardType={"numeric"}
              onChangeText={handleChange("year")}
              value={String(values.year)}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Public</Text>

            <BouncyCheckbox
              style={{ marginTop: 16 }}
              isChecked={values.isPublic}
              onPress={() => !values.isPublic}
              disableBuiltInState
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Completed</Text>

            <BouncyCheckbox
              style={{ marginTop: 16 }}
              isChecked={values.isComplete}
              onPress={() => !values.isComplete}
              disableBuiltInState
            />
          </View>

          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>create</Text>
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
