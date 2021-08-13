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
import { quickDetail } from "../../res/Constants";

const QuickDetail = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} variant='outlined' square className={classes.paper}>
      <List dense>
        <ListItemText className={classes.quickHeader}>
          <Typography style={{ color: COLORS.primary }}>
            Quick Details
          </Typography>
        </ListItemText>
        {quickDetail.map((item) => {
          return (
            <ListItem className={classes.quickContent}>
              <ListItemAvatar>
                <Avatar src={item.img} />
              </ListItemAvatar>
              <ListItemText
                style={{ color: COLORS.primary }}
                primary={item.title}
              />
              <ListItemSecondaryAction>
                <Typography style={{ color: COLORS.grey, fontSize: 12 }}>
                  {item.text}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default QuickDetail;
