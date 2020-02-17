import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    justifyContent: "flex-end",
    marginVertical: 1
  },
  input: {
    fontSize: 18,
    flex: 1
  },
  bodyContent: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  toucheableLineContent: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  label: {
    fontSize: 13,
    paddingBottom: 3
  },
  error: {
    marginBottom: 5,
    color: "#d32f2f",
    fontSize: 13,
    marginTop: 2
  },
  sufix: {
    flexDirection: "column-reverse"
  }
});
