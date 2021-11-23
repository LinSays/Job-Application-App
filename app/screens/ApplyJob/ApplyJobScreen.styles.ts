import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { white } from "react-native-paper/lib/typescript/styles/colors";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },

  header: {
    width: "100%",
    marginTop: 56,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: Font.FontSize.H3,
    fontWeight: "500",
    lineHeight: 36,
    color: Colors.blackGrey,
    textAlignVertical: "top",
    marginLeft: 16,
  },
  uploadContainer: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    borderStyle: "dashed",
    borderColor: Colors.borderColor,
    borderWidth: 1,
    marginBottom: 20,
  },
  uploadBtn: {
    backgroundColor: Colors.orange,
    position: "absolute",
    left: "45%",
    top: 34,
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  uploadIcon: {
    paddingHorizontal: 12,
    paddingTop: 14,
  },
  uploadTextContainer: {
    position: "absolute",
    top: 86,
    width: "100%",
  },
  uploadText: {
    textAlign: "center",
  },
  inputHeader: {
    color: Colors.blackGrey,
    fontWeight: "500",
    fontSize: Font.FontSize.Primary - 1,
    lineHeight: Font.FontLineHeight.Tertiary + 1,
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingLeft: 52,
    paddingRight: 16,
    fontSize: Font.FontSize.Secondary,
    fontFamily: Font.FontFamily.Poppin,
    color: "#5E667C",
    marginBottom: 20,
  },
  textarea: {
    paddingLeft: 24,
    color: Colors.blackGrey,
    fontSize: Font.FontSize.Primary - 1,
    height: 120,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    paddingTop: 14,
    marginBottom: 40,
  },
  applyBtn: {
    borderRadius: 100,
    backgroundColor: Colors.green,
    paddingVertical: 14,
    marginVertical: 30,
  },
  applyBtnText: {
    color: Colors.white,
    lineHeight: Font.FontLineHeight.Secondary,
    textAlign: "center",
  },
});

export default styles;
