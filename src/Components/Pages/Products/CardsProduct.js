import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";

const CardsProduct = ({ item }) => {
  return (
    <div>
      <div className="card m-3" style={{ width: "21rem", height: "450px" }}>
        <img
          src={`${API}/${item.product_image}`}
          className="card-img-top py-3 px-5"
          style={{ height: "300px" }}
          alt={`${API}/${item.product_image}`}
        />
        <div className="card-body">
          <h5 className="card-title">{item.product_name}</h5>
          <h2 className="w-100">$ {item.product_price}</h2>
          <div class="">
            <Link to={`/product/${item._id}`} className="btn btn-warning w-50">
              View Details
            </Link>
            <Link to={`/product/${item._id}`} className="btn btn-info w-50">
              Add to Cart
            </Link>
          </div>
          
          {/* <div className="">
              <Link to={`/product/${item._id}`} className="btn btn-warning w-100">
                View Details
              </Link>

              <Link to={`/product/${item._id}`} className="btn btn-warning w-100">
                Add to Cart
              </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
