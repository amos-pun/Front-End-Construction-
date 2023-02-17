import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPi'

const PublicRoutes = () => {
  return (
    <div>
        {
            (isAuthenticated() && isAuthenticated().user.role === 0 ) ? <Outlet /> : <Navigate to={'/login'}/>
        }
    </div>
  )
}

export default PublicRoutes