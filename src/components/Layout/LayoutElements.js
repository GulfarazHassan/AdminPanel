import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../res/Colors";

const drawerWidth = 230;

export const useStyles = makeStyles((theme, props) => ({
  root: {
    display: "flex",
  },
  menuIcon: {
    color: COLORS.dark_grey,
  },
  appbar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    width: (props) =>
      props.isOpened ? `calc(100% - ${drawerWidth}px)` : `100%`,
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
    boxShadow: `1px 0px 10px ${COLORS.grey}`,
  },
  toolbar: {
    padding: theme.spacing(0, 1),
  },
  searchText: {
    flexGrow: 1,
  },
  iconStyle: {
    color: COLORS.light_blue,
    padding: theme.spacing(0, 1.5),
  },
  dropdown: {
    width: "7rem",
    borderWidth: 0,
    borderLeftWidth: 1,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1.5),
    borderColor: COLORS.light_blue,
    cursor: "pointer",
    margin: theme.spacing(0, 0, 0, 1),
  },
  dropdownText: {
    color: COLORS.primary,
    fontSize: "16px",
  },
  dropdownIcon: {
    color: COLORS.light_blue,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  menuItem: {
    width: "16rem",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: COLORS.light_grey,
    margin: theme.spacing(1, 3),
    height: "3.5rem",
    justifyContent: "center",
  },
  root2: {
    marginLeft: -20,
  },
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  active: {
    background: "#f4f4f4",
    borderLeftWidth: "3px",
    borderStyle: "solid",
    borderLeftColor: COLORS.yellow,
  },
  title: {
    height: "3rem",
    padding: theme.spacing(0, 2.5),
    display: "flex",
    alignItems: "center",
  },
  iconsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
