import React from 'react'
import Footer from '../../Layout/Footer'
import NavbarAdmin from '../../Layout/NavbarAdmin'
import SideBar from '../../Layout/SideBar'

const AdminPaage = () => {
  return (
    <div className='bg-light'>
    <NavbarAdmin />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <SideBar />
                </div>

                <div className='col-lg-7'>
                    <h1>Welcome to Dashboard</h1>
                </div>

                <div className='col-lg-1'></div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AdminPaage