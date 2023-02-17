import { ADD_TO_CART } from "./cartConstant"

const initialData = {
    cart_item : [],
    shipping_info : {}
}

const cartReducer = ( state, action ) => {
    switch(action.type){
        case ADD_TO_CART :
            return {...state, cart_items: action.payload}
        default:
            return {...state}
    }
}

export default cartReducer