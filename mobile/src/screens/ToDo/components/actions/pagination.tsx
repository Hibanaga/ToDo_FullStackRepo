import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
    <View style={styles.container}>
      <TouchableOpacity
        style={
          isFirstPage
            ? { ...styles.prevBtnAction, ...styles.blockedBtnPagination }
            : styles.prevBtnAction
        }
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    marginTop: 32,
  },
  prevBtnAction: {
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
    backgroundColor: "#d4d4d48a",
  },
  btnActionText: {
    fontSize: 32,
  },
});

export default React.memo(Pagination);
