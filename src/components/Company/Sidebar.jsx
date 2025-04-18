import React, { useState } from 'react';
import './Sidebar.css';

const CompanySidebar = ({ onSelect, activeSection }) => {
  const [activeButton, setActiveButton] = useState(activeSection);

  const handleSelect = (section) => {
    setActiveButton(section); // تعيين الزر النشط عند الضغط
    onSelect(section);
  };

  const getButtonClass = (section) => {
    // تحديد الكلاس المناسب لكل زر بناءً على إذا كان هو القسم النشط
    return activeButton === section
      ? 'btn-active text-white bg-gradient-orange active' // إضافة active للقسم النشط
      : 'btn-inactive text-white'; // اللون العادي للأزرار غير النشطة
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
            className={`btn ${getButtonClass('createJob')} text-start w-100`}
            onClick={() => handleSelect('createJob')}
          >
            ➕ Add Job
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`btn ${getButtonClass('candidates')} text-start w-100`}
            onClick={() => handleSelect('candidates')}
          >
            📋 My Jobs
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default CompanySidebar;
