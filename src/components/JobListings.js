import React, { useState, useEffect } from 'react';
import data from '../model/data.json';
import remove from '../images/icon-remove.svg'
import JobItem from './JobItem';

// Mapping through all jobs
// Rendering all info inside the JobItem component
const JobListings = () => {
  const [filters, setFilters] = useState([]);

  const handleClick = (item) => {
    if(!filters.includes(item)) {
      setFilters([...filters, item]);
    }
  }

  useEffect(() => {
    return () => setFilters([]);
  }, []);

  return (
    <main 
      className="flex flex-col flex-grow items-center"
    >
      {filters.length > 0 && 
        <div
          className="flex justify-start items-center mobile:px-7 py-5 h-auto shadow-lg 
          rounded  bg-white w-8/12 relative bottom-10"
        >
          {
            filters.map((filter, id) => {
              return (
                <div className="filter" key={id}>
                  {filter}
                  <div className="flex justify-center items-center">
                    <img src={remove} alt="icon-remove" 
                      className="remove-icon h-full"
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
      }
      <div className="flex flex-col items-center relative mb-16 mt-10 w-8/12">
        {data.map(job => {
          return (
            <JobItem 
              key={job.id}
              job={job}
              handleClick={handleClick}
            />
          )
        })}
      </div>
    </main>
  )
}

export default JobListings;
