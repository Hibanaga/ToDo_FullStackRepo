import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IStateProp {
  currentPage: number;
  isSuccess: boolean;
  limit: number;
  length: number;
  onChangePrevPage: () => void;
  onChangeNextPage: () => void;
}

const Pagination = ({
  currentPage,
  isSuccess,
  limit,
  length,
  onChangePrevPage,
  onChangeNextPage,
}: IStateProp) => {
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
        disabled={isSuccess && length < limit}
        onPress={() => onChangeNextPage()}
      >
        <Text style={styles.btnActionText}>next</Text>
      </TouchableOpacity>
    </>
  );
};

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

export default Pagination;
