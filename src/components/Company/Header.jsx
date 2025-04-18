import React from 'react';

const CompanyHeader = () => {


  return (
    <header
      className="px-4 py-3 d-flex justify-content-between align-items-center border-bottom"
      style={{
        background: 'linear-gradient(135deg, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))',
      }}
    >
      <h5 className="m-0 text-white">Company Dashboard</h5>
      <button className="btn btn-outline-danger">Logout</button>
    </header>

  );
};

export default CompanyHeader;

