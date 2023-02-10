import React, { useEffect, useState } from "react";
import Footer from "../Layout/Footer";
import Admin from "../Layout/SideBar";
import { Link, useParams } from "react-router-dom";
import { getCategoryDetails, updateCategory } from "../../api/categoryAPI";
import { isAuthenticated } from "../../api/userAPi";
import NavbarAdmin from "../Layout/NavbarAdmin";

const UpdateCategory = () => {

  let [category_name, setCategoryName] = useState("");
  let { token } = isAuthenticated()
  let [ error, setError ] = useState('')
  let [ success, setSuccess ] = useState(false)

  let {id} = useParams()

  useEffect(()=>{
    getCategoryDetails(id).then(data=>setCategoryName(data.category_name))
},[])
  
  const handleAdd = e => {
    e.preventDefault()
    updateCategory(id, category_name, token )
    // addCategory(category_name, token)
    .then(data => {
        if(data.error){
            setError(data.error)
        }
        else{
            setSuccess(true)
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
        return <div className="alert alert-success">Category has been Updated</div>
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
            <h1>Update Category</h1>
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
                  Update Category
                </button>
                </div>
                </form>
                <Link to='/admin/category'>Go Back</Link>
          </div>

          <div className="col-lg-1"></div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateCategory;
