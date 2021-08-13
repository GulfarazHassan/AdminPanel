import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles/PlanElements";

const SimpleCard = ({
  changeBgColor,
  bgColor,
  changeTextColor,
  textColor,
  changeBtnColor,
  btnColor,
  btnTextColor,
  heading,
  price,
  month,
  text,
  btnText,
}) => {
  const classes = useStyles({
    changeBgColor,
    bgColor,
    changeTextColor,
    textColor,
    changeBtnColor,
    btnColor,
    btnTextColor,
  });
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h6' className={[classes.primaryText]} gutterBottom>
          {heading}
        </Typography>
        <Typography variant='h2' className={classes.price}>
          {price}
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className={classes.month}>
          {month}
        </Typography>
        <Typography variant='body2' align={"center"}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='medium' className={classes.btn}>
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
