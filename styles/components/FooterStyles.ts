import { TextStyle, ViewStyle } from "react-native";

export const FooterStyles = {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#45474B",
  },
  header: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  } as TextStyle,
  subHeader: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  } as TextStyle,
  description: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 20,
  } as TextStyle,
  inputContainer: {
    marginTop: 20,
  } as ViewStyle,
  input: {
    height: 40,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
  } as ViewStyle,
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    height: 50,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  } as ViewStyle,
  bottomTextContainer: {
    marginTop: 20,
    textAlign: "center",
  } as ViewStyle,
  bottomText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  } as TextStyle,
  faqContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  } as ViewStyle,
  faqText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 14,
    paddingHorizontal: 10,
  } as TextStyle,
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingHorizontal: 20,
  } as ViewStyle,
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: "85%",
    marginTop: 40,
    marginHorizontal: 20,
  } as ViewStyle,
  copyrightContainer: {
    marginTop: 20,
    textAlign: "center",
  } as ViewStyle,
  copyrightText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    paddingTop: 14,
  } as TextStyle,
  languageContainer: {
    paddingTop: 40,
  } as ViewStyle,
  languageText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 14,
    paddingHorizontal: 10,
    textAlign: "center",
    letterSpacing: 4,
  } as TextStyle,
};
