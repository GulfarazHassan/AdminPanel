import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./styles/PlanElements";

const CardThree = ({
  heading,
  price,
  month,
  text1,
  text2,
  text3,
  btnText,
  title,
  background,
  textColor,
  btnTextColor,
  btnBackground,
}) => {
  const classes = useStyles();
  return (
    <Card
      style={{
        height: "22rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      variant='outlined'>
      <CardContent style={{ margin: 0, padding: 0 }}>
        <Typography variant='h5' className={[classes.primaryText]} gutterBottom>
          {heading}
        </Typography>
        <Typography
          variant='h2'
          style={{ color: textColor, textAlign: "center" }}>
          {price}
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className={classes.month}>
          {month}
        </Typography>
        <Divider />
        <Typography
          variant='body2'
          className={classes.primaryText}
          style={{ marginTop: 13 }}>
          {title}
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant='caption'
            style={{ color: textColor, textAlign: "center" }}>
            {text1}
          </Typography>
          <Typography
            variant='caption'
            style={{ color: textColor, textAlign: "center" }}>
            {text2}
          </Typography>
          <Typography
            variant='caption'
            style={{ color: textColor, textAlign: "center" }}>
            {text3}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Button size='medium' className={classes.btn}>
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardThree;
