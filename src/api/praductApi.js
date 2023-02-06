import { API } from '../config'

export const getAllProducts = () => {
    return fetch(`${API}/getallproducts`)
    .then(res=> res.json())
    .catch(err=> console.log(err))
}

export const addproducts = ( product, token ) => {
    return fetch(`${API}/addproduct`,{
        method: "POST",
        headers: {
            Authorization : `Bearer ${token}`
        },
        body: product
    })
    .then(res=> res.json())
    .catch(err=>console.log(err)) 
}