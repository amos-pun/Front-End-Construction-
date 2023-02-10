import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../../api/orderApi";
import Footer from "../../Layout/Footer";
import NavbarAdmin from "../../Layout/NavbarAdmin";
import SideBar from "../../Layout/SideBar";

const AdminOrders = () => {
  const [orders, setOrders] = useState("");

  useEffect(
    () =>
      getAllOrders().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setOrders(data);
        }
      }),
    []
  );

  return (
    <div>
      <div className="bg-light">
        <NavbarAdmin />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <SideBar order />
            </div>

            <div className="col-lg-7">
              <h1>Orders</h1>
              <table className="border p-1 table-hover text-center table table-bordered">
                <thead className="bg-dark-subtle">
                  <tr>
                    <td>S.no</td>
                    <td>Object Item</td>
                    <td>Username</td>
                    <td>Total Price</td>
                    <td>Phone</td>
                    <td>Action</td>
                  </tr>
                </thead>

                <tbody>
                  {orders &&
                    orders.map((order, i) => {
                      return (
                        <tr key={order._id}>
                          <td>{i + 1}</td>
                          <td>{order.orderItems._id}</td>
                          <td>{order.user._id}</td>
                          <td>{order.total_price}</td>
                          <td>{order.phone}</td>
                          <td>{order.status}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="col-lg-1"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminOrders;
