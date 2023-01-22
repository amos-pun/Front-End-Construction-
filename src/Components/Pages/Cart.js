import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

const Cart = () => {
  function createData(image, name, price) {
    return { image, name, price };
  }
  const rows = [
    createData("/image.product/drll.jpg ", "Electric Drill", "Npr 250"),
    createData("/image.product/helmet.jpg ", "Helmet", "Npr 500"),
    createData("/image.product/tape.jpg ", "Mesauring Tape", "Npr 200"),
    createData("/image.product/table-saw.jpg ", "Table-saw", "Npr 40,500"),
    createData("/image.product/screw-driver.jpg ", "Screw-driver", "Npr 235"),
    createData("/image.product/images.jpg ", "Hammer", "Npr 300"),
  ];
  return (
    <div>
      <Navbar />
      <Typography
        variant="h3"
        align="center"
        paddingTop={"10px"}
        sx={{ textDecoration: "underline" }}
        color="secondary"
      >
        Products
      </Typography>

      <Container className='m-auto' >
        <TableContainer component={Paper} sx={{boxShadow:'3'}}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{textDecoration:"underline", border:'1'}}>
                <TableCell align="center" className="fs-4">S.no.</TableCell>
                <TableCell align="center" className="fs-4">Product Images</TableCell>
                <TableCell align="center" className="fs-4">Product Information</TableCell>
                <TableCell align="center" className="fs-4">Price</TableCell>
                <TableCell align="center" className="fs-4">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ 
                  boxShadow:'3'
                 }}
                >
                  <TableCell component="th" scope="row" align="center" className="fs-5">
                    {i + 1}
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    <img 
                      src={row.image}
                      style={{ height: "200px" }}
                      alt="img"
                    />
                  </TableCell>
                  <TableCell align="center" className="fs-5">{row.name}</TableCell>
                  <TableCell align="center" className="fs-5">{row.price}</TableCell>
                </TableRow>
              ))}
              
            </TableBody>
          </Table>
          
        </TableContainer>
        <tr>
            <button className="btn btn-danger">Empty the Cart</button>
        </tr>
      </Container>

      <Footer />
    </div>
  );
};

export default Cart;
