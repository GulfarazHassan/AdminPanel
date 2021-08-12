import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import person from "../../assets/Images/person.png";
import { COLORS } from "../../res/Colors";
import { useStyles } from "./styles/DashboardElements";

const QuickDetail = () => {
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      variant='outlined'
      square
      className={classes.tableContainer}>
      <List dense>
        <ListItemText className={classes.quickHeader}>
          <Typography style={{ color: COLORS.primary }}>
            Quick Details
          </Typography>
        </ListItemText>
        <ListItem className={classes.quickContent}>
          <ListItemAvatar>
            <Avatar src={person} />
          </ListItemAvatar>
          <ListItemText
            style={{ color: COLORS.primary }}
            primary={`290 New Customers`}
          />
          <ListItemSecondaryAction>
            <Typography style={{ color: COLORS.grey, fontSize: 12 }}>
              Last 24 Hours
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  );
};

export default QuickDetail;
