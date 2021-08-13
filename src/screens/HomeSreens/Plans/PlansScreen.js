import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import SimpleCard from "../../../components/Plans/SimpleCard";
import CardTwo from "../../../components/Plans/CardTwo";
import { useStyles } from "../../../components/Plans/styles/PlanElements";
import { COLORS } from "../../../res/Colors";

const PlansScreen = (...props) => {
  const [changeBgColor, setChangeBgColor] = useState(true);
  const [changeTextColor, setChangeTextColor] = useState(true);
  const [changeBtnColor, setChangeBtnColor] = useState(true);
  const classes = useStyles({ changeTextColor, textColor: "red" });
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={6}>
          <SimpleCard
            heading={"STARTER"}
            price={"$1"}
            month={"Per agent / mo"}
            textColor={COLORS.yellow}
            text={
              <p className={classes.paragraph}>
                Starter features for
                <br />
                your business to grow.
              </p>
            }
            btnText={"BUY"}
            changeBgColor={changeBgColor}
            bgColor={COLORS.yellow}
            changeTextColor={changeTextColor}
            textColor={COLORS.white}
            changeBtnColor={changeBtnColor}
            btnColor={COLORS.white}
            btnTextColor={COLORS.yellow}
          />
        </Grid>
        <Grid item lg={4} xs={6}>
          <SimpleCard
            heading={"REGULAR"}
            price={"$25"}
            month={"Per agent / mo"}
            text={
              <p className={classes.paragraph}>
                Professional features for
                <br />
                your business to grow.
              </p>
            }
            btnText={"BUY"}
          />
        </Grid>
        <Grid item lg={4} xs={6}>
          <SimpleCard
            heading={"PLUS"}
            price={"$59"}
            month={"Per agent / mo"}
            text={
              <p style={{ padding: 0, margin: 0 }}>
                Professional features for
                <br />
                your business to grow.
              </p>
            }
            btnText={"BUY"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={6}>
          <SimpleCard
            heading={"STARTER"}
            price={"$8"}
            month={"PER USER, MONTH"}
            text={
              <p style={{ padding: 0, margin: 0 }}>
                Professional features for
                <br />
                your business to grow.
              </p>
            }
            btnText={"BUY"}
          />
        </Grid>
        <Grid item lg={4} xs={6}>
          <CardTwo
            heading={"STARTER"}
            text={
              <p style={{ padding: 0, margin: 0 }}>
                Professional features for
                <br />
                your business to grow.
              </p>
            }
            price={"$9"}
            month={"PER USER, MONTH"}
            btnText={"FREE TRIAL"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlansScreen;
