import Admin from 'pages/Admin/Admin'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AdminRoute = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<Admin />} />
        </Routes>
    )
}
export default AdminRoute