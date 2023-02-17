import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPi'

// localhost:3000/admin type garda admin ley matrai chirna pauney banauua ko lagi this is used.
// user ley URL j deyko cha thi anushar ko page render garney.
const AdminRoutes = () => {
  return (
    <div>
        {
            (isAuthenticated() && isAuthenticated().user.role === 1 ) ? <Outlet /> : <Navigate to={'/login'}/>
        }
       
    </div>
  )
}

export default AdminRoutes