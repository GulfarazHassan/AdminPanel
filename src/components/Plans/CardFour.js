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
import { COLORS } from "../../res/Colors";
import { plansData } from "../../res/Constants";

const CardFour = ({
  heading,
  price,
  text,
  btnText,
  text1,

  textColor,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardWrapper} variant='outlined'>
      <CardContent
        style={{
          padding: 0,
        }}>
        <div className={classes.cardHeader}>
          <Typography
            variant='h5'
            gutterBottom
            align={"center"}
            style={{ color: textColor }}>
            {heading}
          </Typography>
          <Typography
            variant='body2'
            align={"center"}
            style={{ color: COLORS.grey }}>
            {text}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography
              variant='h2'
              className={classes.price}
              style={{ color: textColor }}>
              {price}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography
                variant='body2'
                style={{ color: textColor, fontWeight: "bold" }}>
                {`per`}
                <br />
                {"month"}
              </Typography>
            </div>
          </div>
          <Typography
            variant='body2'
            align={"center"}
            style={{ color: textColor }}>
            {text1}
          </Typography>
        </div>
      </CardContent>
      {plansData.map((item) => {
        return (
          <>
            <Typography variant={"caption"} align={"center"}>
              {item.text}
            </Typography>
            <Divider />
          </>
        );
      })}
      <CardActions style={{ padding: 0 }}>
        <Button
          fullWidth
          style={{
            backgroundColor: COLORS.dark_orange,
            height: "3rem",
            color: COLORS.white,
            textTransform: "none",
          }}>
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardFour;
