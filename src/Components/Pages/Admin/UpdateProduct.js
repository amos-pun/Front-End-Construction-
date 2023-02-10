import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  productDetail, updateProduct } from "../../../api/praductApi";
import { getAllCategories } from "../../../api/categoryAPI";
import { isAuthenticated } from "../../../api/userAPi";
import Admin from "../../Layout/SideBar";
import Footer from "../../Layout/Footer";
import NavbarAdmin from "../../Layout/NavbarAdmin";
import { API } from "../../../config";

const UpdateProduct = () => {


    const [ categories, setCategories ] = useState ([])
    const [product, setProduct] = useState({
      product_name: "",
      product_price: "",
      product_description: "",
      count_in_stock: "",
      product_image: "",
      category: "",
      error: "",
      success: false,
      formdata: ""
  });

  const {
    product_name,
    product_price,
    product_description,
    count_in_stock,
    error,
    success,
    product_image,
    formdata,
  } = product;

  // useRef() is used to refresh the value
  let sel_ref = useRef()
  let file_ref = useRef()
  const {id} = useParams()

  const{token} = isAuthenticated()


  useEffect(()=>{
    getAllCategories()
    .then(data=>setCategories(data))
    productDetail(id)
    .then(data=>{
        if(data.error){
            console.log(data.erro)
        }
        else{
            // setProduct(data)

            sel_ref.current.value = data.category._id
            setProduct({...product, ...data, formdata: new FormData})
        }
    })
  },[success])



  const handleChange = name => e => {
    let value
    if (name === "product_image") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
      setProduct({ ...product, [name]: value });
    }
    formdata.set(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    updateProduct( id, formdata, token)
    .then(data =>{ 
        if(data.error){
            setProduct({...product, error:data.error,success:false})
        }
        else{
            setProduct({success:true, product_name: '', product_price: '', product_description: '',
            count_in_stock:'', formdata: new FormData , error: ''})
            sel_ref.current.value = ''
            file_ref.current.value = ''
        }
    })
  }

  const showError = () => {
    if(error){
        return <div className="alert alert-danger">{error}</div>
    }
  }

  const showSuccess = () => {
    if(success){
        return <div className="alert alert-success">Product Added Successfully.<Link to="/admin/product">Go Back</Link></div>
    }
  }
    
  return (
    <div>
      <div className="bg-light">
        <NavbarAdmin />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <Admin product />
            </div>

            <div className="col-lg-9">
              <h1>Update Product</h1>
              {showError()}
              {showSuccess()}
              <div className="d-flex">

                <div className="col-6">
                  <img src={`${API}/${product_image}`} className='w-100' alt={`${API}/${product_image}`}/>
                </div>
                
                <form className="col-6">
                <div className="row">
                </div>
                  <label htmlFor="product_name">Product Name</label>
                  <input
                    type="text"
                    className="form-control mb-1"
                    id="product_name"
                    onChange={handleChange("product_name")}
                    value={product_name}
                  />

                  <label htmlFor="product_price">Product Price</label>
                  <input
                    type={"number"}
                    className="form-control mb-1"
                    id="product_price"
                    onChange={handleChange("product_price")}
                    value={product_price}
                  />

                  <label htmlFor="product_description">Description</label>
                  <textarea
                    className="form-control mb-1"
                    rows={3}
                    id="product_description"
                    onChange={handleChange("product_description")}
                    value={product_description}
                  ></textarea>

                  <label htmlFor="count"> Count in stock</label>
                  <input
                    type={"number"}
                    className="form-control mb-1"
                    onChange={handleChange("count_in_stock")}
                    value={count_in_stock}
                    id="count"
                  />

                  <label htmlFor="image">Product Image</label>
                  <input
                    type={"file"}
                    className="form-control mb-1"
                    id="image"
                    onChange={handleChange("product_image")}
                    ref={file_ref}
                  ></input>

                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    className="form-control mb-1"
                    onChange={handleChange("category")}
                    ref={sel_ref}
                  >
                    <option>Select Category</option>
                    {categories &&
                      categories.map((cat) => {
                        return (
                          <option key={cat._id} value={cat._id}>
                            {cat.category_name}
                          </option>
                        );
                      })}
                  </select>

                  <button
                    className="btn btn-warning w-100"
                    onClick={handleSubmit}
                  >
                    Update Product
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UpdateProduct;
