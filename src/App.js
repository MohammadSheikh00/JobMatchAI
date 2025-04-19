import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CompanyDashboard from './pages/CompanyDashboard';
import AddJob from './components/Company/AddJob';
import MyJobs from './components/Company/MyJobs'; // أو المسار الصحيح لمكون MyJobs

//<Route path="/myjobs" element={<MyJobs />} />

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CompanyDashboard />} />
      <Route path="/addjob" element={<AddJob />} />
      <Route path="/myjobs" element={<MyJobs />} />

    </Routes>
  );
};

export default App;
