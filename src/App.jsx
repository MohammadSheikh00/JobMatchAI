
// src/App.js
import React from 'react';
import HomePage from './pages/HomePage';
import ViewCandidates from './components/Company/ViewCandidates';

// داخل <Routes>
<Route path="/jobs/:jobId/candidates" element={<ViewCandidates jobs={postedJobs} />} />

function App() {
  return (
    <div>
      <HomePage />  {/* استدعاء الصفحة المدمجة */}
    </div>
  );
}

export default App;
