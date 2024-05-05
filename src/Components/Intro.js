import React from 'react'
import SearchJob from './FilterSearch/SearchJob'
import JobCards from './JobCards/JobCards'
import useWeekdayData from '../Hooks/useWeekdayData'
import { useSelector } from 'react-redux'
const Intro = () => {

  useWeekdayData();

  const jobs = useSelector((store) => store.job);

  return (
    <div  >
      <div>
        <SearchJob />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          jobs && jobs.data.map(job => <JobCards key={job.jdUid} job={job} />)
        }
      </div>
    </div>
  )
}

export default Intro