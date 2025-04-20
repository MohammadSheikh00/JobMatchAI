import React from 'react';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import { ApplicationsProvider } from './components/JobSeeker/ApplicationsContext'; // ✅ المسار الصحيح

const App = () => {
  return (
    <ApplicationsProvider>
      {/* <JobSeekerDashboard /> */}
      <CompanyDashboard />
    </ApplicationsProvider>
  );
}
export default App;
