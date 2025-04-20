import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ViewCandidatesModal = ({ job, candidates, onClose }) => {
    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>👥 Candidates for {job.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="mb-3">Candidates List:</h5>
                {candidates.length > 0 ? (
                    <div>
                        {candidates.map((candidate, index) => (
                            <div key={index} className="mb-3">
                                <p><strong>Name:</strong> {candidate.name}</p>
                                <p><strong>CV:</strong> <a href={candidate.cv} target="_blank" rel="noopener noreferrer">View CV</a></p>
                                <p><strong>Match Percentage:</strong> {candidate.match}%</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No candidates found.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewCandidatesModal;
