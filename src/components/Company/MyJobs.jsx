import React from 'react';

const MyJobs = ({ jobs, onCandidateSelect }) => {
  return (
    <div>
      <h2>My Jobs</h2>
      {Array.isArray(jobs) && jobs.length > 0 ? (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Deadline:</strong> {job.applicationdeadline}</p>
              <p><strong>Number of Positions:</strong> {job.numberofpositions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default MyJobs;
