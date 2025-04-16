import React, { useState } from 'react';
import './JobSeekerDashboard.css';

const JobSeekerDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [jobs, setJobs] = useState([]);
  const [analyzed, setAnalyzed] = useState(false);

  const jobData = [
    {
      id: 1,
      title: 'Frontend Developer',
      match: 85,
      improvements: ['React.js Advanced', 'TailwindCSS'],
      missingSkills: ['TypeScript'],
    },
    {
      id: 2,
      title: 'Backend Developer',
      match: 70,
      improvements: ['Node.js Deep Dive'],
      missingSkills: ['Docker'],
    },
  ];

  const handleAnalyze = () => {
    setJobs(jobData);
    setAnalyzed(true);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">JobMatch<span>AI</span></div>
        <nav className="nav">
          <ul>
            <li>الملف الشخصي</li>
            <li>رفع السيرة الذاتية</li>
            <li>الإشعارات</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="header">
          <h2>اختر القسم الذي ترغب في التقديم عليه</h2>
          <div className="controls">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">اختر القسم</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
            <button
              onClick={handleAnalyze}
              disabled={!selectedCategory}
            >
              تحليل
            </button>
          </div>
        </header>

        <section className="job-list">
          {analyzed && jobs.map(job => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p className="match">نسبة التوافق: {job.match}%</p>
              <p className="improvements">اقتراحات: {job.improvements.join(', ')}</p>
              <p className="missing">المهارات الناقصة: {job.missingSkills.join(', ')}</p>
              <button className="details-btn">تفاصيل الوظيفة / تقديم</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default JobSeekerDashboard;
