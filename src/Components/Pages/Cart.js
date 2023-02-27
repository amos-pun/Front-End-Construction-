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
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { API } from "../../config";
import { add_item_to_cart, removeFromCart } from "../reducer/cartActions";
import Swal from "sweetalert2";

const Cart = () => {
  // function createData(image, name, price) {
  //   return { image, name, price };
  // }
  // const rows = [
  //   createData("/image.product/drll.jpg ", "Electric Drill", "Npr 250"),
  //   createData("/image.product/helmet.jpg ", "Helmet", "Npr 500"),
  //   createData("/image.product/tape.jpg ", "Mesauring Tape", "Npr 200"),
  //   createData("/image.product/table-saw.jpg ", "Table-saw", "Npr 40,500"),
  //   createData("/image.product/screw-driver.jpg ", "Screw-driver", "Npr 235"),
  //   createData("/image.product/images.jpg ", "Hammer", "Npr 300"),
  // ];

  const cart_items = useSelector((state) => state.cart.cart_items);

  const dispatch = useDispatch();

  const decrease_quantity = (id,quantity) => (e) => {
    e.preventDefault()
    quantity--
    if(quantity == 0){
      dispatch(removeFromCart(id));
    }
    else{
      dispatch(add_item_to_cart(id,quantity))
    }
  }

  const increase_quantity = (id, quantity, count_in_stock) => e => {
    e.preventDefault()
    quantity++
    if(quantity > count_in_stock){
      Swal.fire({
        icon:"error",
        text:"Product is out of Store",
        title:"warning"
      })
    }
    else{
      dispatch(add_item_to_cart(id, quantity))
    }
  }

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

      <Container className="m-auto">
      {
        cart_items.length > 0 ?

        <TableContainer component={Paper} sx={{ boxShadow: "3" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ textDecoration: "underline", border: "1" }}>
                <TableCell align="center" className="fs-4">
                  S.no.
                </TableCell>
                <TableCell align="center" className="fs-4">
                  Product Images
                </TableCell>
                <TableCell align="center" className="fs-4">
                  Product Name
                </TableCell>
                <TableCell align="center" className="fs-4">
                  Unit Price
                </TableCell>
                <TableCell align="center" className="fs-4">
                  Quantity
                </TableCell>
                <TableCell align="center" className="fs-4">
                  Total Price
                </TableCell>
                <TableCell align="center" className="fs-4">
                  Remove Item
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cart_items.map((item, i) => (
                <TableRow
                  key={item}
                  sx={{
                    boxShadow: "3",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    className="fs-5"
                  >
                    {i + 1}
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    <img
                      src={`${API}/${item.product_image}`}
                      style={{ height: "200px" }}
                      alt="img"
                    />
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    {item.product_name}
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    {" "}
                    Rs. {item.product_price}
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    <div className="btn-group" style={{ width: "100px" }}>
                      <button className="btn btn-warning" onClick={decrease_quantity(item.product, item.quantity)}>-</button>

                      <input
                        type="text"
                        className="form-control border-0 w-50"
                        value={item.quantity}
                        disabled
                      />
                      
                      <button className="btn btn-success" onClick={increase_quantity(item.product, item.quantity, item.count_in_stock)}>+</button>
                    </div>
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    Rs
                    {item.product_price * item.quantity}
                  </TableCell>
                  <TableCell align="center" className="fs-5">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(removeFromCart(item.product));
                      }}
                    >
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <button className="btn btn-danger">Empty the Cart</button>
        </TableContainer>

        :

        <div className="alert alert-danger">NO ITEMS IN CART</div>
      }
      </Container>

      <Footer />
    </div>
  );
};

export default Cart;
