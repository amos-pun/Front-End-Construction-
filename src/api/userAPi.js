import {API} from "../config";

export const userRgister = (username, email, password) => {
    let user = {username, email, password}
    return fetch(`${API}/register`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=> {return response.json()})
    .catch(error=> console.log(error))
}

// user email confirmation
export const emailConfirmation =  (token) => {
   return fetch(`${API}/verifyEmail/${token}`,{
    method:"GET",
    heders: {
        "Content-Type":"application/json"
    }
   })
   .then( res => res.json())
   .catch( err => console.log(err))
}

// forget password
export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email})
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

// reset password
export const resetPassword = (password, token) => {
    return fetch(`${API}/resetpassword/${token}`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({password})
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

// signIn
export const login = ( email, password ) => {
    return fetch(`${API}/signin`,{
        method:'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .catch(err=> console.log(err))
}

// to keep signed in
export const authenticate = (data) => {
    localStorage.setItem('jwt',JSON.stringify(data))
}

// to check if logged in
export const isAuthenticated = () => {
    return localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : false
}

// to signout 
export const signout = () => {
    return fetch(`${API}/signout`)
    .then(res => res.json())
    .catch(err =>console.log(err))
}

// to get all users
export const getAllUsers = () => {
    return fetch(`${API}/userslist`)
    .then(res => res.json())
    .catch(err => console.log(err))
}
