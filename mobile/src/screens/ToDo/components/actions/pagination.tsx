import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IStateProp {
  currentPage: number;
  isSuccess: boolean;
  limit: number;
  length: number;
  setCurrentPage: (prop: number) => void;
}

const Pagination = ({
  currentPage,
  limit,
  length,
  setCurrentPage,
}: IStateProp) => {
  const handleChangePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleChangeNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.prevBtnAction}
        disabled={currentPage <= 1}
        onPress={handleChangePrevPage}
      >
        <Text style={styles.btnActionText}>prev</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          length < limit
            ? { ...styles.nextBtnAction, ...styles.blockedBtnPagination }
            : styles.nextBtnAction
        }
        disabled={length < limit}
        onPress={handleChangeNextPage as any}
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
  blockedBtnPagination: {
    backgroundColor: "#a5a5a58b",
  },
  btnActionText: {
    fontSize: 32,
  },
});

export default Pagination;
