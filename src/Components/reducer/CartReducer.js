import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstant"

const initialData = {
    cart_items : [],
    shipping_info : {}
}

const cartReducer = ( state, action ) => {
    switch(action.type){
        case ADD_TO_CART :
            let new_item = action.payload
            let itemExists = state.cart_items.find(item => item.product === new_item.product)
            if(!itemExists){
                return {...state, cart_items: [...state.cart_items, action.payload]}
            }
            else{
                return { ...state, cart_items: [...state.cart_items.map(item =>{
                    return (item.product === new_item.product) ? new_item : item 
                })]}
            }   

        case REMOVE_FROM_CART :
            return {...state, cart_items: [...state.cart_items.filter(item=>item.product!=action.payload)]}
            
        default:
            return {...state}
    }
}

export default cartReducer