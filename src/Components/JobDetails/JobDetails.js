import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './JobDetails.style.js';


const JobDetails = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Wrapper>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Job Details</h2>

            <div>
                <h3>About Company</h3>
                <p>{job}</p>

                <div>
                    <h3>About Role </h3>
                    <p>{job}</p>
                </div>
                <div>
                    <h3>Number of positions currently vacant: 30</h3>
                    
                </div>
                
                <div>
                    <h3>Job Description </h3>
                    <p>{job}</p>
                </div>
                <div>
                    <h3>Key job responsibilities </h3>
                    <p>{job}</p>
                </div>

               <div>
                <h3>Required Skills & Experience</h3>
                <p>{job}</p>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </Wrapper>,
    document.getElementById('portal-root')
  );
};

export default JobDetails;
