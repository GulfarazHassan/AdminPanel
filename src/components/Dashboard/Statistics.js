import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { COLORS } from "../../res/Colors";
import { useStyles } from "./styles/DashboardElements";

const Statistics = () => {
  const classes = useStyles();
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Products sold",
        data: [5, 20, 8, 17, 12, 25],
      },
      {
        name: "Total views",
        data: [15, 10, 14, 8, 15, 22],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: [COLORS.purple, COLORS.sky],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetY: 10,
        offsetX: -20,
      },
    },
  });

  return (
    <Paper
      elevation={0}
      variant='outlined'
      square
      className={classes.tableContainer}>
      <div className={classes.statsHeader}>
        <Typography>Statistics</Typography>
        <FormControl variant='outlined' className={classes.formControl}>
          <Select>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>
      <div id='chart'>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type='area'
          height={350}
        />
      </div>
    </Paper>
  );
};

export default Statistics;
