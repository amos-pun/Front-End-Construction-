import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Admin from '../Layout/Admin'
import NavbarAdmin from '../Layout/NavbarAdmin'
import { API } from '../../config'
import { getAllProducts } from '../../api/praductApi'
import { Link } from 'react-router-dom'

const AdminProducts = () => {

    const [ products, setProducts ] = useState("")

    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            } else {
                setProducts(data)
            }
        })
    },[])
    
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
                                        <td>
                                            <img src={`${API}/${product.product_image}`} alt={product.product_image} style={{height:"100px"}}/>
                                        </td>
                                        <td>{product.product_name}</td>
                                        <td>{product.count_in_stock}</td>
                                        <td>{product.product_price}</td>
                                        <div className='btn-group'>
                                            <button className='btn btn-warning'>Update</button>
                                            <button className='btn btn-danger'>Remove</button>
                                        </div>
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