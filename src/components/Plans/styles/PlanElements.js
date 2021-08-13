import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../../res/Colors";

export const useStyles = makeStyles((theme) => ({
  // *******************Common****************
  root: {
    maxWidth: 320,
    height: "22rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: ({ changeBgColor, bgColor }) =>
      changeBgColor ? bgColor : COLORS.white,
  },
  primaryText: {
    color: ({ changeTextColor, textColor }) =>
      changeTextColor ? textColor : COLORS.primary,
    textAlign: "center",
    fontWeight: "500",
  },

  price: {
    color: ({ changeTextColor, textColor }) =>
      changeTextColor ? textColor : COLORS.primary,
    textAlign: "center",
    padding: theme.spacing(1.2, 0),
    fontWeight: "400",
  },
  month: {
    color: ({ changeTextColor, textColor }) =>
      changeTextColor ? textColor : COLORS.primary,
    textAlign: "center",
    padding: theme.spacing(0, 0, 1.6, 0),
    opacity: 0.45,
  },
  btn: {
    backgroundColor: ({ changeBtnColor, btnColor }) =>
      changeBtnColor ? btnColor : COLORS.yellow,
    color: ({ changeBtnColor, btnTextColor }) =>
      changeBtnColor ? btnTextColor : COLORS.white,
    width: "8rem",
    margin: theme.spacing(1.6, 0),
  },
  btnOutlined: {
    color: COLORS.grey,
    width: "8rem",
    margin: theme.spacing(1.6, 0),
  },
  msg: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 14,
  },
  cardWrapper: {
    height: "22rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "15rem",
    backgroundColor: COLORS.white,
  },
  paragraph: {
    margin: 0,
    padding: 0,
    color: ({ changeTextColor, textColor }) =>
      changeTextColor ? textColor : COLORS.primary,
  },
}));
