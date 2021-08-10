import { makeStyles } from "@material-ui/core";
import { COLORS } from "./Colors";
import Background from "../assets/Images/background.png";

export const globalStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: theme.spacing(20, 4),
  },
  content: {
    width: "100%",
    ["@media (min-width:960px)"]: {
      width: "55%",
    },
  },
  title: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  subtitle: {
    color: COLORS.grey,
    marginTop: "0.8rem",
  },
  input: {
    marginTop: "2rem",
  },
}));
