import StudentDashboard from 'pages/student/StudentDashboard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const StudentRoute = () => {
    return (
        <Routes><Route path='/dashboard' element={<StudentDashboard />} /></Routes>
    )
}

export default StudentRoute;