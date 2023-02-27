import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emailConfirmation } from '../../api/userAPi'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const EmailConfirmation = () => {

    let [ error, setError ] = useState('')
    let [ success, setSuccess] = useState('')
    
    //  get token from url
    let params = useParams()
    let token = params.token 

    // consol.log(token)

    // const { token } = useParams()
    // destructuring

    useEffect(()=>{
        emailConfirmation(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
        })
    },[])

    const showError = () => {
        if(error){
            return <div className='alert alert-success'>{error}
            <Link to='/login'>Login</Link>
            </div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}
            <Link to='/login'>Log in</Link>
            </div>
        }
    }
 
  return (
    
    <div>
        <Navbar />
            <div className='p-5'>
            {showError()}
            {showSuccess()}
            </div>
        <Footer/>    
    </div>
  )
}

export default EmailConfirmation