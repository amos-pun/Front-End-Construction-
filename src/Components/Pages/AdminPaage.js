import React from 'react'
import Footer from '../Layout/Footer'
import Admin from '../Layout/Admin'
import NavbarAdmin from '../Layout/NavbarAdmin'

const AdminPaage = () => {
  return (
    <div>
    <NavbarAdmin />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3'>
                    <Admin />
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