import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect, activeSection }) => {
  const [activeButton, setActiveButton] = useState(activeSection);

  const handleSelect = (section) => {
    setActiveButton(section);
    onSelect(section);
  };

  const getButtonClass = (section) => {
    return activeButton === section
      ? 'btn-active text-white bg-gradient-orange active'
      : 'btn-inactive text-white';
  };

  return (
    <aside className="bg-dark text-white p-4" style={{ width: '250px' }}>
      <h4 className="sidebar-title mb-4">
        JobMatch<span className="gray-text">AI</span>
      </h4>
      <ul className="nav flex-column">

        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('home')} text-start w-100`}
            onClick={() => handleSelect('home')}
          >
            🏠 Home
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('profile')} text-start w-100`}
            onClick={() => handleSelect('profile')}
          >
            👤 Profile
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('uploadResume')} text-start w-100`}
            onClick={() => handleSelect('uploadResume')}
          >
            📄 Upload Resume
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('FindJobs')} text-start w-100`}
            onClick={() => handleSelect('findJobs')}
          >
            
            🕵️‍♂️ Find Jobs
          </button>
        </li>


        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('applications')} text-start w-100`}
            onClick={() => handleSelect('applications')}
          >
            💼 My Applications
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('interviewCoach')} text-start w-100`}
            onClick={() => handleSelect('interviewCoach')}
          >
            🧠 AI Interview Coach
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
