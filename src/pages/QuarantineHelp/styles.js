import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp("6"),
    paddingTop: hp("7"),
    paddingBottom: hp("2")
  },

  back: {
    flexDirection: "row"
  },

  helpList: {
    paddingBottom: hp("3")
  },

  backTitle: {
    color: "#333",
    marginTop: hp("1"),
    marginLeft: wp("2")
  },

  postsContainer: {
    paddingHorizontal: wp("5")
  },

  help: {
    backgroundColor: "#rgba(10, 180, 255, 0.5)",
    paddingHorizontal: wp("5"),
    paddingVertical: hp("3"),
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  helpTitle: {
    fontSize: hp("2.5"),
    color: "#fff",
    fontWeight: "600",
    marginBottom: hp("1")
  },

  helpDescription: {
    fontSize: hp("1.8"),
    color: "#fff",
    fontWeight: "200"
  },

  contactHelp: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: wp("5"),
    paddingVertical: hp("0.6"),
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5
  },

  distance: {
    color: "#4f4f4f",
    fontWeight: "300",
    marginTop: hp("1")
  }
});
