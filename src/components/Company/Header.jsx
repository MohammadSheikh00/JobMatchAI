import React from 'react';

const CompanyHeader = () => {
  return (
    <header className="bg-white px-4 py-3 shadow-sm d-flex justify-content-between align-items-center border-bottom">
      <h5 className="m-0">Company Dashboard</h5>
      <button className="btn btn-outline-danger">Logout</button>
    </header>
  );
};

export default CompanyHeader;
