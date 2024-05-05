import React from 'react';
import './SearchJob.style';
import Wrapper from './SearchJob.style';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../Redux/jobSlice';

const SearchJob = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterName, value) => {
    dispatch(updateFilters({ [filterName]: value }));
  };


  return (
    <Wrapper>
      <div className="search-job-wrapper">
        <div className="filter">

          <select className="select-box" onChange={(e) => handleFilterChange('role', e.target.value)}>
            <option value="">Select Role</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="IOS">IOS</option>
            <option value="Tech Lead">Tech Lead</option>
          </select>
        </div>
        <div className="filter">

          <select className="select-box" onChange={(e) => handleFilterChange('experience', e.target.value)}>
            <option value="">Select Experience</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="filter">

          <select className="select-box" onChange={(e) => handleFilterChange('remote', e.target.value)}>
            <option value="">Select Remote/On-site</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>
        <div className="filter">

          <select className="select-box" onChange={(e) => handleFilterChange('minBasePay', e.target.value)}>
            <option value="">Select Min Base Pay</option>
            <option value="0">$0 - $50</option>
            <option value="50`">$50 - $100</option>
            <option value="100`">$100 - $150</option>
            <option value="150`">$150 - $200</option>
          </select>
        </div>
        <div className="filter">
          <input type="text" className="input-box-company" placeholder="Company Name" onChange={(e) => handleFilterChange('companyName', e.target.value)} />
        </div>
        <div className="filter">
          <input type="text" className="input-box-location" placeholder="Location" onChange={(e) => handleFilterChange('location', e.target.value)} />
        </div>
        <div className="filter">

          <select className="select-box" onChange={(e) => handleFilterChange('techStack', e.target.value)}>
            <option value="">Select Tech Stack</option>
            <option value="REACT JS">REACT JS</option>
            <option value="NODE JS">NODE JS</option>
            <option value="JAVA">JAVA</option>
          </select>
        </div>
      </div>
    </Wrapper>

  );
};

export default SearchJob;
