import React from 'react';

// Dynamic component exclusive to languages and tools since they're arrays
const JobCategories = ({ items }) => {
  return (
    <div className="category">
      {
        items.map(item => {
          return (
            <div 
              className="inline-block gap-x-6"
              key={item}
            >
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

export default JobCategories;
