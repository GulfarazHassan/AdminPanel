import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles/DashboardElements";

function createData(LOCATION, VIEWS, SALES, CONVERSION, TOTAL) {
  return { LOCATION, VIEWS, SALES, CONVERSION, TOTAL };
}

const rows = [
  createData("adobe.com", 3746, 752, `${43}%`, `$19,291`),
  createData("adobe.com", 8126, 728, `${32}%`, `$17,638`),
  createData("adobe.com", 8836, 694, `${28}%`, `$16,218`),
  createData("adobe.com", 1173, 645, `${24}%`, `$14,421`),
  createData("adobe.com", 2739, 539, `${20}%`, `$12,370`),
  createData("adobe.com", 1762, 432, `${18}%`, `$9,928`),
];
const Referrer = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} variant='outlined' square className={classes.paper}>
      <Typography className={classes.title}>Referrer</Typography>
      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>LOCATION</TableCell>
              <TableCell className={classes.tableCell} align='center'>
                VIEWS
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                SALES
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                CONVERSION
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                TOTAL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.LOCATION}>
                <TableCell
                  className={classes.tabledata}
                  component='th'
                  scope='row'>
                  {row.LOCATION}
                </TableCell>
                <TableCell className={classes.tabledata} align='center'>
                  {row.VIEWS}
                </TableCell>
                <TableCell className={classes.tabledata} align='center'>
                  {row.SALES}
                </TableCell>
                <TableCell className={classes.tabledata} align='center'>
                  {row.CONVERSION}
                </TableCell>
                <TableCell className={classes.tabledata} align='center'>
                  {row.TOTAL}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.showMore}>
        <Button className={classes.showMoreText}>Show More</Button>
      </div>
    </Paper>
  );
};

export default Referrer;
