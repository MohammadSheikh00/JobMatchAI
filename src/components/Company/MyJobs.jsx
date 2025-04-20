import React, { useState } from 'react';
import ViewCandidatesModal from './ViewCandidatesModal';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyJobs = ({ jobs, setJobs, onViewCandidates, onEditJob }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [jobToDeleteIndex, setJobToDeleteIndex] = useState(null);
  const [jobToDeleteTitle, setJobToDeleteTitle] = useState('');

  const handleViewCandidates = (job) => {
    setSelectedJob(job);

    const fetchedCandidates = [
      { name: 'Ahmed Ali', cv: 'path/to/cv1', match: 85 },
      { name: 'Sara Zaid', cv: 'path/to/cv2', match: 90 },
    ];
    setCandidates(fetchedCandidates);
  };

  const handleDeleteJob = (index) => {
    setJobToDeleteIndex(index);
    setJobToDeleteTitle(jobs[index]?.title || '');
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (jobToDeleteIndex !== null) {
      const updatedJobs = jobs.filter((_, i) => i !== jobToDeleteIndex);
      if (typeof setJobs === 'function') {
        setJobs(updatedJobs);
      } else {
        console.error('❌ setJobs is not a function');
      }
    }
    setShowDeleteConfirm(false);
    setJobToDeleteIndex(null);
    setJobToDeleteTitle('');
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setJobToDeleteIndex(null);
    setJobToDeleteTitle('');
  };

  return (
    <div className="container">
      <h3 className="mb-4">📋 My Posted Jobs</h3>

      {Array.isArray(jobs) && jobs.length > 0 ? (
        <div className="row">
          {jobs.map((job, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="p-4 shadow-sm rounded bg-white border-start border-5 border-dark position-relative">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-bold text-dark">🧾 {job.title}</h5>
                  <div className="btn-group">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => onEditJob(job, index)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDeleteJob(index)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>

                <p className="mb-1"><strong>📍 Location:</strong> {job.location}</p>
                <p className="mb-1"><strong>📅 Deadline:</strong> {job.applicationdeadline}</p>
                <p className="mb-1"><strong>🛠 Skills:</strong> {job.skills}</p>
                <p className="mb-2"><strong>👥 Positions:</strong> {job.numberofpositions}</p>

                <button
                  className="btn btn-sm btn-dark"
                  onClick={() => handleViewCandidates(job)}
                >
                  🔍 View Candidates
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs posted yet.</p>
      )}

      {selectedJob && (
        <ViewCandidatesModal
          job={selectedJob}
          candidates={candidates}
          onClose={() => {
            setSelectedJob(null);
            setCandidates([]);
          }}
        />
      )}

      <Modal show={showDeleteConfirm} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete the job{' '}
            <strong className="text-danger">"{jobToDeleteTitle}"</strong>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyJobs;
