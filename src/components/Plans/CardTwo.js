import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles/PlanElements";

const CardTwo = ({ heading, price, month, text, btnText, textColor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h5' className={[classes.primaryText]} gutterBottom>
          {heading}
        </Typography>
        <Typography
          variant='body2'
          style={{ color: textColor, textAlign: "center" }}>
          {text}
        </Typography>

        <Typography
          variant='h2'
          className={classes.price}
          style={{ color: textColor }}>
          {price}
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className={classes.month}>
          {month}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='medium'
          variant={"outlined"}
          className={classes.btnOutlined}>
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTwo;
