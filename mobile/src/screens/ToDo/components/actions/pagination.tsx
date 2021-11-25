import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface stateProp {
  currentPage: number;
  isSuccess: any;
  limit: number;
  data: any;
  onChangePrevPage: () => void;
  onChangeNextPage: () => void;
}

export default function pagination({
  currentPage,
  isSuccess,
  limit,
  data,
  onChangePrevPage,
  onChangeNextPage,
}: stateProp) {
  return (
    <>
      <TouchableOpacity
        style={styles.prevBtnAction}
        disabled={currentPage <= 1}
        onPress={() => onChangePrevPage()}
      >
        <Text style={styles.btnActionText}>prev</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextBtnAction}
        disabled={isSuccess && data.length < limit}
        onPress={() => onChangeNextPage()}
      >
        <Text style={styles.btnActionText}>next</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  prevBtnAction: {
    position: "absolute",
    bottom: 80,
    left: 40,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtnAction: {
    position: "absolute",
    bottom: 80,
    right: 40,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,

    paddingHorizontal: 8,
    paddingVertical: 4,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  btnActionText: {
    fontSize: 32,
  },
});
