import React, { useState, useRef, useEffect } from 'react';
import './AddJob.css';
import {
  FaBriefcase,
  FaAlignLeft,
  FaTools,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from 'react-icons/fa';
import clickSoundFile from '../image/click.mp3';
import { useLocation, useNavigate } from 'react-router-dom';

const AddJob = ({ setPostedJobs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const editingJob = location.state?.job || null;
  const editingIndex = location.state?.index;

  const [job, setJob] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
    applicationdeadline: '',
    numberofpositions: '',
  });

  useEffect(() => {
    if (editingJob) {
      setJob(editingJob);
    }
  }, [editingJob]);

  const [errors, setErrors] = useState({});
  const clickSound = useRef(null);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!job.title.trim()) newErrors.title = 'Job title is required';
    if (!job.description.trim()) newErrors.description = 'Description is required';
    if (!job.skills.trim()) newErrors.skills = 'Skills are required';
    if (!job.location.trim()) newErrors.location = 'Location is required';
    if (!job.applicationdeadline) newErrors.applicationdeadline = 'Application deadline is required';
    if (!job.numberofpositions || Number(job.numberofpositions) < 1) {
      newErrors.numberofpositions = 'Number of positions must be at least 1';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clickSound.current.play();

    if (validateForm()) {
      setPostedJobs((prevJobs) => {
        if (editingJob !== null && editingIndex !== undefined) {
          // تعديل الوظيفة
          const updatedJobs = [...prevJobs];
          updatedJobs[editingIndex] = job;
          alert('Job updated successfully!');
          return updatedJobs;
        } else {
          // وظيفة جديدة
          alert('Job posted successfully!');
          return [...prevJobs, job];
        }
      });

      setJob({
        title: '',
        description: '',
        skills: '',
        location: '',
        applicationdeadline: '',
        numberofpositions: '',
      });
      setErrors({});
      navigate('/myjobs'); // رجوع لصفحة الوظائف
    }
  };

  return (
    <div className="job-container">
      <audio ref={clickSound} src={clickSoundFile} preload="auto" />
      <div className="job-form fade-in">
        <h2>{editingJob ? 'Edit Job' : 'Post a New Job'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <FaBriefcase className="icon" />
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={job.title}
                onChange={handleChange}
              />
              {errors.title && <div className="error">{errors.title}</div>}
            </div>

            <div className="form-group">
              <FaTools className="icon" />
              <input
                type="text"
                name="skills"
                placeholder="Required Skills"
                value={job.skills}
                onChange={handleChange}
              />
              {errors.skills && <div className="error">{errors.skills}</div>}
            </div>

            <div className="form-group full">
              <FaAlignLeft className="icon" />
              <textarea
                name="description"
                placeholder="Job Description"
                value={job.description}
                onChange={handleChange}
              />
              {errors.description && <div className="error">{errors.description}</div>}
            </div>

            <div className="form-group">
              <FaMapMarkerAlt className="icon" />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={job.location}
                onChange={handleChange}
              />
              {errors.location && <div className="error">{errors.location}</div>}
            </div>

            <div className="form-group">
              <FaCalendarAlt className="icon" />
              <input
                type="date"
                name="applicationdeadline"
                value={job.applicationdeadline}
                onChange={handleChange}
              />
              {errors.applicationdeadline && (
                <div className="error">{errors.applicationdeadline}</div>
              )}
            </div>

            <div className="form-group">
              <FaUsers className="icon" />
              <input
                type="number"
                name="numberofpositions"
                placeholder="Number of Positions"
                min="1"
                value={job.numberofpositions}
                onChange={handleChange}
              />
              {errors.numberofpositions && (
                <div className="error">{errors.numberofpositions}</div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-button">
            {editingJob ? 'Update Job' : 'Submit Job'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
