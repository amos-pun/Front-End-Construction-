import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productDetail } from '../../../api/praductApi'
import Navbar from '../../Layout/Navbar'
import { API } from '../../../config'
import { Rating } from '@mui/material'
import { useDispatch } from 'react-redux'
import { add_item_to_cart } from '../../reducer/cartActions'
import swal from 'sweetalert'

const ProductDetails = () => {

    const [ product , setProduct ] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        productDetail(id)
        .then(data => {
            if(data.error){
                console.log(data.derro)
            }
            else {
                setProduct(data)
            }
        })
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(add_item_to_cart(id,1))
        swal("Congrats",`${product.product_name}item added to cart`,"success")
    }
    
  return (
    
    <div>
    <Navbar />
    <div className='container my-5 shadow-lg p-5 m-auto'>
        <div className='row'>
            <div className='col-md-6'>
                <img src= {`${API}/${product.product_image}`} alt={product.product_image} className="w-100" />
            </div>
            <div className='col-md-6'>
                <h3><u>Product Details</u></h3>
                <h3> {product.product_name}</h3>
                <h5>Rs. {product.product_price}</h5>
                <h5>In stock: {product.count_in_stock}</h5>
                <h5>Descrption: {product.product_descrption}</h5>
                <h5> Rating:
                <Rating value={product.Rating} readOnly />
                </h5>
                <hr/>
                <button className='btn btn-warning w-100' onClick={handleSubmit}>Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetails