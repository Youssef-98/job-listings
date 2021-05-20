import React from 'react';

// Dynamic component exclusive to languages and tools since they're arrays
const JobCategories = ({ items }) => {
  return (
    <>
      {
        items.map(item => {
          return (
            <div 
              className="category"
              key={item}
            >
              {item}
            </div>
          )
        })
      }
    </>
  )
}

export default JobCategories;
