import React from "react";
import {
  Paper,
  Typography,
  CardContent,
  CardMedia,
  Card,
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  ButtonBase,
} from "@material-ui/core";
import background from "../../assets/Images/background.png";
import { COLORS } from "../../res/Colors";
import { mapData } from "../../res/Constants";
import { RadioButtonUncheckedRounded } from "@material-ui/icons";
import { useStyles } from "./styles/DashboardElements";

export default function DetailMap() {
  const classes = useStyles();
  return (
    <Paper elevation={0} variant='outlined' square className={classes.paper}>
      <Card elevation={0}>
        <CardContent className={classes.cardHeader}>
          <Typography variant='body2'>Details on Map</Typography>
          <ButtonBase>
            <Typography variant='caption' style={{ color: COLORS.yellow }}>
              Show All List
            </Typography>
          </ButtonBase>
        </CardContent>
        <CardMedia className={classes.media}>
          <img src={background} style={{ height: "100%", width: "100%" }} />
        </CardMedia>
        <CardContent>
          <List dense className={classes.listWrapper}>
            {mapData.map((item) => (
              <ListItem key={item.title} className={classes.list}>
                <RadioButtonUncheckedRounded
                  fontSize={"small"}
                  style={{ color: item.color, marginRight: 7 }}
                />
                <ListItemText style={{ color: COLORS.primary }}>
                  {item.title}
                </ListItemText>
                <ListItemSecondaryAction>
                  <ListItemText style={{ color: COLORS.primary }}>
                    {item.text}
                  </ListItemText>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Paper>
  );
}
