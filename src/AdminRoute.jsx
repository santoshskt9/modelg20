import Admin from 'pages/Admin/Admin'
import AdminLogin from 'pages/Admin/AdminLogin'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AdminRoute = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<Admin />} />
            <Route path="/administrator/login" element={<AdminLogin />} />
        </Routes>
    )
}
export default AdminRoute