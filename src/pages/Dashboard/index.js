import React from "react";
import { Container, Grid } from "@material-ui/core";
import DetailMap from "../../components/Dashboard/DetailMap";
import TopProduct from "../../components/Dashboard/TopProduct";
import QuickDetail from "../../components/Dashboard/QuickDetail";
import GraphsCard from "../../components/Dashboard/GraphsCard";
import Statistics from "../../components/Dashboard/Statistics";
import Referrer from "../../components/Dashboard/Referrer";

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={6}>
          <GraphsCard />
        </Grid>
        <Grid item lg={4} xs={6}>
          <GraphsCard />
        </Grid>
        <Grid item lg={4} xs={6}>
          <GraphsCard />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <Statistics />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <Referrer />
        </Grid>
        <Grid item lg={4} xs={12}>
          <DetailMap />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <TopProduct />
        </Grid>
        <Grid item lg={4} xs={12}>
          <QuickDetail />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
