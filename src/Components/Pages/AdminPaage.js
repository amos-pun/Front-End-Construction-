import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import Admin from '../Layout/Admin'

const AdminPaage = () => {
  return (
    <div>
        <Navbar />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3'>
                    <Admin order />
                </div>

                <div className='col-lg-9'>
                    <h1>Welcome to Dashboard</h1>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AdminPaage