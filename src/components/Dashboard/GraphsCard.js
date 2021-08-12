import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { COLORS } from "../../res/Colors";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import { useStyles } from "./styles/DashboardElements";

const GraphsCard = ({ up }) => {
  const classes = useStyles();
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [1, 2, 1, 4, 1, 2, 3, 2, 1, 1],
      },
    ],
    options: {
      chart: {
        type: "bar",
        animations: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [COLORS.purple],
      stroke: {
        colors: [COLORS.purple],
        width: -1.5,
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    },
  });

  return (
    <Card className={classes.cardWrapper}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.cardTitle}
          color='textSecondary'
          gutterBottom>
          Total Views
        </Typography>
        <Typography className={classes.text}>267K</Typography>
        <div className={classes.textIcon}>
          {up ? (
            <FaLongArrowAltUp color={COLORS.green} size={10} />
          ) : (
            <FaLongArrowAltDown color={COLORS.red} size={10} />
          )}
          <Typography className={classes.percentage}>13.8%</Typography>
        </div>
      </CardContent>
      <CardMedia className={classes.bars}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type='bar'
          width={120}
        />
      </CardMedia>
    </Card>
  );
};

export default GraphsCard;
