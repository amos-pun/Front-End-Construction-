import React from "react";
import { Link } from "react-router-dom";
import { API } from '../../../config'

const CardsProduct = ({ item }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", height:"450px" }}>
        <img 
            src={`${API}/${item.product_image}`} 
            className="card-img-top" 
            style={{height:"300px"}}
            alt={`${API}/${item.product_image}`} />
        <div className="card-body">
          <h5 className="card-title">{item.product_name}</h5>
          <h2 className="w-50 btn">$ {item.product_price}</h2>
          <div className="text-center">
            <Link to="#" className="btn btn-warning w-75">
                Buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
