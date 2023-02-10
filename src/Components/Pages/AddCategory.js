import React, { useState } from "react";
import Footer from "../Layout/Footer";
import Admin from "../Layout/SideBar";
import { isAuthenticated } from "../../api/userAPi";
import { addCategory } from "../../api/categoryAPI";
import { Link } from "react-router-dom";
import NavbarAdmin from "../Layout/NavbarAdmin";

const AddNewCategory = () => {

  let [category_name, setCategoryName] = useState("");
  let { token } = isAuthenticated()
  let [ error, setError ] = useState('')
  let [ success, setSuccess ] = useState(false)
  
  const handleAdd = e => {
    e.preventDefault()
    addCategory(category_name, token)
    .then(data => {
        if(data.error){
            setError(data.error)
            setSuccess(false)
        }
        else{
            setSuccess(true)
            setError('')
            setCategoryName('')
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
        return <div className="alert alert-success">Category Added</div>
    }
  }

  return (
    <div>
      <NavbarAdmin />
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-1"></div>

          <div className="col-lg-3">
            <Admin />
          </div>

          <div className="col-lg-7">
            <h1>Add New Category</h1>
            {showError()}
            {showSuccess()}
            <form className="p-5 mt-3 shadow-lg">
              <label htmlFor="category_name">Category Name</label>
              <input
                type={"text"}
                id="category_name"
                className="form-control"
                onChange={e=>setCategoryName(e.target.value)}
                value={category_name}
              />
              <div className="text-center">
                <button className="btn btn-warning w-75 mt-3"
                    onClick={handleAdd}
                >
                  Add New Category
                </button>
              </div>
              <Link to="/admin/category">Go Back</Link>
            </form>
          </div>

          <div className="col-lg-1"></div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddNewCategory;
