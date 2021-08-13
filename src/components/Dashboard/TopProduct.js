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
import Product from "../../assets/Images/Product.png";
import { useStyles } from "./styles/DashboardElements";
import { COLORS } from "../../res/Colors";
function createData(PRODUCT, AVAILABILITY, TOTAL) {
  return { PRODUCT, AVAILABILITY, TOTAL };
}

const rows = [
  createData("Women’s Vintage Peacoat", `320 In Stock`, `$19,291`),
  createData("Women’s Oatmeal Sweater", `Out of Stock`, `$17,638`),
  createData("Women’s Denim Shirt", `3 In Stock`, `$16,218`),
  createData("Women’s Vintage Peacoat", `3 In Stock`, `$14,421`),
];

const heading = [];

const TopProduct = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} variant='outlined' square className={classes.paper}>
      <Typography className={classes.title}>Top Products</Typography>
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell} align='left'>
                PRODUCT
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                AVAILABILITY
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                TOTAL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.PRODUCT}>
                <TableCell
                  className={[classes.tabledata, classes.product]}
                  component='th'
                  scope='row'>
                  <img src={Product} style={{ marginRight: "1rem" }} />
                  {row.PRODUCT}
                </TableCell>
                <TableCell className={classes.tabledata} align='center'>
                  <Button className={classes.productBtn}>
                    {row.AVAILABILITY}
                  </Button>
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

export default TopProduct;
