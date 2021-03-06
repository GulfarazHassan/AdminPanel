import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../../res/Colors";

export const useStyles = makeStyles((theme, props) => ({
  // ***************common*****
  title: {
    padding: theme.spacing(1.2, 0),
    color: COLORS.primary,
  },
  paper: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(2),
    backgroundColor: COLORS.white,
    height: "28rem",
  },
  showMore: {
    height: "3rem",
    // border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  showMoreText: {
    fontSize: 12,
    color: COLORS.yellow,
    textTransform: "none",
  },
  // ***************graphCardStyle****************
  cardWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: COLORS.grey,
    fontSize: 14,
    margin: theme.spacing(0, 0, 2, 0),
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textIcon: {
    display: "flex",
    alignItems: "center",
  },
  percentage: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: "500",
  },
  bars: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  // ******************Statistics******************

  statsHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  formControl: {
    minWidth: 150,
    margin: 0,
    padding: 0,
  },

  // ****************Referrer***********************

  tableRow: {
    backgroundColor: COLORS.light_grey,
  },
  tableCell: {
    color: COLORS.light_blue,
  },
  tabledata: {
    color: COLORS.primary,
  },

  // ****************Detail Map*********************
  listWrapper: {
    flexGrow: 1,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(0.5, 0),
    padding: 0,
  },
  media: {
    height: 140,
    padding: theme.spacing(1, 0),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_grey,
    borderBottomStyle: "solid",
  },
  list: {
    padding: theme.spacing(0.55, 0),
    margin: 0,
  },

  // ********************Product************************
  productBtn: {
    backgroundColor: COLORS.skin,
    opacity: 0.4,
    fontSize: "0.6rem",
    width: "6rem",
    padding: theme.spacing(0.6, 1),
    borderRadius: "10rem",
  },
  product: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // ********************Quick Detail***********************
  quickHeader: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_grey,
    borderStyle: "solid",
    padding: theme.spacing(2, 0),
    fontSize: 30,
  },
  quickContent: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_grey,
    borderStyle: "solid",
    padding: theme.spacing(1.7, 0),
  },
}));
