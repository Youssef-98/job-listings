import React, { useState, useEffect } from 'react';
import data from '../model/data.json';
import remove from '../images/icon-remove.svg'
import JobItem from './JobItem';

// Mapping through all jobs
// Rendering all info inside the JobItem component
const JobListings = () => {
  const [filters, setFilters] = useState([]);

  // adds the selected filter to show above the list of jobs
  const handleClick = (item) => {
    if(!filters.includes(item)) {
      setFilters([...filters, item]);
    }
  }

  // removes the selected filter
  const handleRemove = (filter) => {
    let array = [...filters]; // make a separate copy of the array
    let index = array.indexOf(filter);
    if (index !== -1) {
      array.splice(index, 1);
      setFilters(array);
    }
  }

  // removes all the filters
  const handleRemoveAll = () => setFilters([]);

  let filterJobList = (tags, filters) => {
    // filter the jobs based on the given tags
    // using every method to check each filter with the actual filters from data.json
    let filteredJobs = filters.every(f => tags.includes(f));
    return filteredJobs;
  }

  const renderFilteredJobs = () => {
    return data.map(job => {
      // insert all possible tags in array
      let tags = [job.role, job.level, ...(job.languages) || [], ...(job.tools) || []];
      if(filters.length === 0) {
        return (
          <JobItem 
            key={job.id}
            job={job}
            handleClick={handleClick}
            tags={tags}
          />
        );
      }
      else if(filterJobList(tags, filters)) {
        // return the filtered jobs
        return (
          <JobItem 
            key={job.id}
            job={job}
            handleClick={handleClick}
            tags={tags}
          />
        );
      }
    });
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
          className="flex justify-between items-center px-7 mobile:px-7 py-5 h-auto shadow-lg 
          rounded  bg-white w-11/12 mobile:w-11/12 desktop:w-8/12 relative bottom-10
          "
        > 
          <div className="flex flex-wrap flex-1 gap-y-4">
            {
              filters.map((filter, id) => {
                return (
                  <div className="filter" key={id}>
                    <p className="pr-2 leading-loose">{filter}</p>
                    <div 
                      onClick={() => handleRemove(filter)} 
                      className="flex justify-center items-center flex-shrink-0"
                    >
                      <img src={remove} alt="icon-remove" 
                        className="remove-icon h-full border border-none rounded-r"
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
          <p 
            onClick={handleRemoveAll}
            className="hover:underline cursor-pointer hover:text-primary text-bottom-info"
          >
            Clear
          </p>
        </div>
      }
      <div className="flex flex-col items-center relative mb-0 mobile:mt-12 desktop:my-16 mt-10 w-11/12 mobile:w-11/12 desktop:w-8/12">
        {renderFilteredJobs()}
      </div>
    </main>
  )
}

export default JobListings;
