import React, { useState, useEffect } from 'react';
import data from '../model/data.json';
import JobItem from './JobItem';

// Mapping through all jobs
// Rendering all info inside the JobItem component
const JobListings = () => {
  const [filters, setFilters] = useState([]);

  return (
    <main 
      className="flex flex-col flex-grow items-center my-16"
      role="main"
    >
      {data.map(job => {
        return (
          <JobItem 
            key={job.id}
            job={job}
          />
        )
      })}
    </main>
  )
}

export default JobListings;
