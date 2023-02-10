import { API } from '../config'

// to get all orders
export const getAllOrders = () => {
    return fetch(`${API}/getallorders`)
    .then(res => res.json())
    .catch( err => console.log(err))
}