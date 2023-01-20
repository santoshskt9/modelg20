import React from 'react';
import EnhancedTable from './components/EnhancedTable';

const Admin = () => {
  return (
    <React.Fragment>
        <div className="container py-5 mt-5">
            <h1>Admin Panel</h1>
            <EnhancedTable />
        </div>
    </React.Fragment>
  )
}

export default Admin;