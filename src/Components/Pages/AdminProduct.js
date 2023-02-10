import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Admin from '../Layout/SideBar'
import NavbarAdmin from '../Layout/NavbarAdmin'
import { API } from '../../config'
import { deleteProduct, getAllProducts } from '../../api/praductApi'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { isAuthenticated } from '../../api/userAPi'

const AdminProducts = () => {

    const [ products, setProducts ] = useState("")
    const { token } = isAuthenticated()
    const [ success, setSuccess ] = useState(false)

    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            } else {
                setProducts(data)
            }
        })
    },[success])

    const handleDelete = id => e => {
        e.preventDefault()
        setSuccess(false)
        swal("Delete Product", "Are you sure you want to delete",{
            buttons:{
                Cancel : "Cancel",
                Delete : "Delete",
            },
            icon: "info",
        })
        .then((value) => {
            switch (value) {
                case "Cancel" :
                    swal("Canceled!", "Delete Canceled", "warning")
                    break;

                case "Delete":
                    deleteProduct(id, token)
                    .then((data) => {
                        if(data.error) {
                            swal("Error!",data.error, "error")
                        } else {
                            setSuccess(true)
                            swal("Success!", data.message, "success")
                        }
                    })
                    break;
                    default:
                        swal('something went wrong!');

            }
        })
    }
    
  return (
    <div className='bg-light'>
    <NavbarAdmin />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <Admin product/>
                </div>

                <div className='col-lg-7'>
                    <h1>Products</h1>
                    <Link to='/admin/product/add'>Add New Product</Link>
                    <table className='table text-center table-hover table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <td>S.no</td>
                                <td>Product Image</td>
                                <td>Product Name</td>
                                <td>Quantity</td>
                                <td>Unit Price</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products && products.map((product,i) => {
                                    return<tr key={product._id}>
                                        <td>{i+1}</td>
                                        <td >
                                            <img src={`${API}/${product.product_image}`} alt={product.product_image} style={{width:"100px",height:"100px"}} />
                                        </td>
                                        <td>{product.product_name}</td>
                                        <td>{product.count_in_stock}</td>
                                        <td>{product.product_price}</td>
                                        <td>
                                            <div className='btn-group'>
                                                <Link to={`/admin/product/update/${product._id}`} className='btn btn-warning'>Update</Link>
                                                <button 
                                                    className='btn btn-danger'
                                                    onClick={handleDelete(product._id)}
                                                    >Remove</button>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='col-lg-1'></div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AdminProducts