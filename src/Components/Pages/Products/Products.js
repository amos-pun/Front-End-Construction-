import React, { useEffect, useState } from "react";
import { getFilteredProducts } from "../../../api/praductApi";
import CardsProduct from "./CardsProduct";
import CategoriesCheckbox from "./CategoriesCheckbox";
import Navbar from "../../Layout/Navbar";
import PricesRadio from "./PricesRadio";

const Products = () => {
  let [ sortBy, setSortBy ] = useState('')
  let [ order, setOrder ] = useState('')
  let [ limit, setLimit ] = useState('')
  let [products, setProducts] = useState([]);
  let [myFilter, setMyFilter ] = useState({
    filter: {product_price:[],category:[]}
    // product_price must be according to back-end.
  })

  const handleFilter = (filters, filterBy) => {
    let new_filter = {...myFilter}
    new_filter.filter[filterBy]= filters
    setMyFilter(new_filter)
    console.log(myFilter)
  }

  // useEffect is used to load product
  useEffect(() => {
    getFilteredProducts(myFilter, sortBy, order, limit)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProducts(data);
        }
    });
  }, [myFilter]);

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <h5>Categories</h5>
            <ul>
              <CategoriesCheckbox handleCategory={handleFilter} />
            </ul>

            <h5>Prices</h5>
            <PricesRadio handlePrice={handleFilter}/>

           
          </div>

          <div className="col-lg-9">
            <h5>Products</h5>
            <div className="d-flex flex-wrap" height={'30vh'}>
              {
                products && products.map((product,i)=>{
                  return <CardsProduct item={product} key={i}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
