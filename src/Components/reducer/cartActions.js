import { getAllProducts } from "../../api/praductApi"
import { ADD_TO_CART } from "./cartConstant"

export const add_item_to_cart = (product, quantity) => async ( dispatch, getState ) => {
// product - id
// get product details from backend
let data = await getAllProducts(product)
// load data into reducer/store
dispatch({
    type: ADD_TO_CART,
    payload: {
        product: data._id,
        product_name : data.product_name,
        product_price : data.product_price,
        product_image : data.product_image,
        count_in_stock : data.count_in_stock,
        quantity : quantity
    }
})
// set data in localStorage
localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))
} 