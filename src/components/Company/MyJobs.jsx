import React from 'react';

const MyJobs = ({ jobs, onDeleteJob, onViewCandidates, onEditJob }) => {
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
                      onClick={() => onDeleteJob(index)}
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
                  onClick={() => onViewCandidates(job)}
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
    </div>
  );
};

export default MyJobs;
