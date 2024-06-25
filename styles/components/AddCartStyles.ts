import { TextStyle, ViewStyle } from "react-native";

export const AddCartStyles = {
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    backgroundColor: "black",
    alignSelf: "center",
    paddingVertical: 12,
  } as ViewStyle,
  disabledButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    backgroundColor: "gray",
    alignSelf: "center",
    paddingVertical: 12,
  } as ViewStyle,
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  } as TextStyle,
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  } as TextStyle,
};
