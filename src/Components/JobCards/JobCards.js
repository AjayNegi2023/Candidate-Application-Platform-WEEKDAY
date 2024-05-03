import React, { useState } from 'react';
import Wrapper from "./JobCards.style";
import PlaceIcon from '@mui/icons-material/Place';
import JobDetails from "../JobDetails/JobDetails";
import { DollarSign } from 'react-feather';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const JobCards = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Wrapper>
        <div className='container'>
          <img className='logo' src={job?.logoUrl} alt='Company Logo' />
          <div className='details'>
            <h1 className='title'>{job?.jobTitle ? job?.jobTitle : job?.jobRole.toUpperCase()+"DEVELOPER"}</h1>
            <p className='company'>{job?.companyName ? job?.companyName  :""}</p>
          </div>
        </div>

        <div className='info'>
          <div className='icon-label'>
            <PlaceIcon className='locationIcon' />
            <p className='label'>Location</p>
          </div>
          <div className='info-text'>
            <p className='location'>{job?.location.toUpperCase()}</p>
          </div>
        </div>

        {
          (job?.minExp != null || job?.maxExp != null) &&
          (<div className='info'>
            <div className='icon-label'>
              <PlaceIcon className='icon' />
              <p className='label'>Experience</p>
            </div>
            <div className='info-text'>
              <p className='experience'> {job?.minExp != null ? job.minExp : '0'} - {job?.maxExp != null ? job.maxExp : '0'} Years </p>
            </div>
          </div>)
        }
        {job?.minJdSalary != null && job?.maxJdSalary != null && (
          <div className='info'>
            <div className='icon-label'>
              <DollarSign className='salaryIcon' />
              <p className='label'> Salary:</p>
            </div>
            <div className='info-text'>
              <p className='experience'>
                ${job?.minJdSalary}- ${job?.maxJdSalary}
              </p>
            </div>
          </div>
        )}
        <div className='info'>
          <div className='icon-label'>
            <DescriptionOutlinedIcon className='aboutIcon' />
            <p className='label'>About</p>
          </div>
        </div>

        <p className="text">
          {job?.jobDetailsFromCompany.slice(0, 500)}
          <span onClick={toggleModal} className="read-or-hide" style={{ color: 'green' }}>
            {job?.jobDetailsFromCompany.length > 500 ? '...read more' : ''}
          </span>
          <span className="description-bottom">{job?.jobDetailsFromCompany.slice(500)}</span>
        </p>
      </Wrapper>
      <JobDetails isOpen={isModalOpen} onClose={toggleModal} job={job?.jobDetailsFromCompany} />
    </>
  );
}

export default JobCards;
