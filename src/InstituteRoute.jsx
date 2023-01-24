import DashboardInstitute from 'pages/college/DashboardInstitute'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const InstituteRoute = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardInstitute />} />
        </Routes>
    )
}

export default InstituteRoute