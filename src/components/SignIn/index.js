import {
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  Box,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import { COLORS } from "../../res/Colors";
import { globalStyles } from "../../res/Styles";
import { useStyles } from "./SignInElements";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      <Link className={classes.link} href='https://material-ui.com/'>
        Term of use. Privacy policy
      </Link>{" "}
    </Typography>
  );
}
const SignIn = () => {
  const classes = useStyles();
  const globalClass = globalStyles();
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={globalClass.root}>
      <Grid container>
        <Grid item xs={false} md={6} className={globalClass.image} />
        <Grid item xs={12} md={6}>
          <div className={globalClass.contentWrapper}>
            <Typography variant={"h4"} className={globalClass.title}>
              PANDA/TA
            </Typography>
            <Typography variant={"body2"} className={globalClass.subtitle}>
              Welcome back! Please login to your account.
            </Typography>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              className={globalClass.content}>
              <TextField
                placeholder={"Username"}
                className={globalClass.input}
              />
              <TextField
                placeholder={"Password"}
                className={globalClass.input}
              />
              <div className={classes.rememberMe}>
                <FormControlLabel
                  className={classes.label}
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={handleChange}
                      className={classes.checkbox}
                      style={{ color: COLORS.primary }}
                    />
                  }
                  label={<Typography variant={"body2"}>Remember me</Typography>}
                />
                <Typography
                  variant={"caption"}
                  className={classes.label}
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Forgot is cliczxds")}>
                  Forgot Password
                </Typography>
              </div>
              <div className={classes.btnWrapper}>
                <Button variant={"contained"} className={classes.login}>
                  Login
                </Button>
                <Button variant={"outlined"} className={classes.signUp}>
                  Sign up
                </Button>
              </div>
            </Container>

            <Box
              style={{
                position: "absolute",
                bottom: 10,
              }}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
