import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../res/Colors";

export const useStyles = makeStyles((theme) => ({
  checkbox: {
    color: COLORS.primary,
  },
  rememberMe: {
    display: "flex",
    marginTop: "1.5rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: COLORS.primary,
  },
  btnWrapper: {
    display: "flex",
    height: "7.5rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  login: {
    height: "2.5rem",
    width: "8rem",
    background: COLORS.primary,
    borderRadius: 3,
    color: COLORS.white,
  },
  signUp: {
    height: "2.5rem",
    width: "8rem",
    borderRadius: 3,
    color: COLORS.primary,
    borderColor: COLORS.primary,
  },
  link: {
    color: COLORS.primary,
  },
}));
