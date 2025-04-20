import React from 'react';
<<<<<<< HEAD
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import { ApplicationsProvider } from './components/JobSeeker/ApplicationsContext'; // ✅ المسار الصحيح

const App = () => {
  return (
    <ApplicationsProvider>
      <JobSeekerDashboard />
      {/* <CompanyDashboard /> */}
    </ApplicationsProvider>
=======
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
>>>>>>> b41fece1c3514a058e632ec55337734af4e37f00
  );
};

export default App;
