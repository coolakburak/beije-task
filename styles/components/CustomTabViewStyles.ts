import { TextStyle, ViewStyle } from "react-native";

export const CustomTabViewStyles = {
  container: {
    paddingTop: 36,
  },
  slider: {
    width: 380,
    height: 40,
  },
  header: {
    fontSize: 17,
    fontWeight: "400",
    paddingLeft: 20,
  } as TextStyle,
  numbersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  numbers: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 12,
  } as TextStyle,
};
