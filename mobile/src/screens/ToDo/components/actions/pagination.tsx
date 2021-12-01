import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IStateProp {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  setCurrentPage: (prop: number) => void;
}
const Pagination = ({
  currentPage,
  isFirstPage,
  isLastPage,
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
        disabled={isFirstPage}
        onPress={handleChangePrevPage}
      >
        <Text style={styles.btnActionText}>prev</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          isLastPage
            ? { ...styles.nextBtnAction, ...styles.blockedBtnPagination }
            : styles.nextBtnAction
        }
        disabled={isLastPage}
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

export default React.memo(Pagination);
