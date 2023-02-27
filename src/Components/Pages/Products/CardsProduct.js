import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";

const CardsProduct = ({ item }) => {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem", height: "450px" }}>
        <img
          src={`${API}/${item.product_image}`}
          className="card-img-top"
          style={{ height: "300px" }}
          alt={`${API}/${item.product_image}`}
        />
        <div className="card-body">
          <h5 className="card-title">{item.product_name}</h5>
          <h2 className="w-100">$ {item.product_price}</h2>
          <div className="text-center">
            <Link to={`/product/${item._id}`} className="btn btn-warning w-100">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
