import { API } from "../config"

export const getAllCategories = () => {
    return fetch(`${API}/getallcategories`)
    .then(res=> res.json())
    .catch(err=>console.log(err))
}

// add category
export const addCategory = ( category_name, token ) => {
    return fetch(`${API}/addcategory`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=> res.json())
    .catch(err=>console.log(err))
}