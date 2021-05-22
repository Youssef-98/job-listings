import React from 'react';

// Renders every job in the list
const JobItem = ({ job, handleClick, tags }) => {
  // Gives a thicker, cyan-ish left border if the job is featured
  const isFeatured = job => job.featured && 'border-l-4';

  // Fetching urls from a local json file didn't work as excpected like with an import
  // So I used the require + default combo to make it fully functional with the 'logo' property
  // I also removed './images' from every logo property to make it more unique
  return (
    <div 
      className={`flex flex-col gap-y-2 mobile:gap-y-3 desktop:gap-y-0 desktop:flex-row desktop:justify-between shadow-lg rounded h-72 w-full mb-14 desktop:h-36 desktop:p-8 desktop:mb-6 
      ${isFeatured(job)} bg-white`}
      style={{ 
        borderLeftColor: job.featured && 'hsl(180, 29%, 50%)' 
      }}
    >
      <div className="flex flex-col desktop:flex-row h-auto px-5 mobile:px-0 mobile:py-0 relative bottom-4 desktop:bottom-0">
        <img 
          src={require(`../images/${job.logo}`).default} 
          alt={job.company} 
          className="h-14 w-14 mobile:h-20 mobile:w-20 rounded-lg relative bottom-2 mobile:left-5 mobile:bottom-6 desktop:left-0 desktop:bottom-0"
        />
        <div className="flex flex-col justify-center mobile:px-5 gap-1">
          <div className="flex gap-x-3 leading-normal">
            <p className="text-primary text-sm">{job.company}</p>
            <div 
              className="flex text-white items-center gap-x-1 leading-3"
              style= {{ fontSize: 10 }}
            >
              {job.new && 
                <p 
                  className="rounded-xl border bg-primary
                  py-1 px-2"
                >
                  NEW!
                </p>
                }
              {job.featured &&
                <p
                  className="rounded-xl border bg-featured
                  py-1 px-2"
                >
                  FEATURED
                </p>
              }
            </div>
          </div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" 
            className="font-bold text-lg mobile:hover:text-primary mobile:cursor-pointer">
            {job.position}
          </a>
          <ul
            className="text-bottom-info text-sm flex-grow-0 flex-shrink-0"
            id="bottom-line"
          >
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <hr 
        className="desktop:hidden mx-5"
      />
      <div className="flex desktop:justify-end desktop:items-center flex-wrap pr-10 pb-10 gap-y-3 desktop:pb-0">
        {
          tags.map((tag, i) => {
            return <div className="category" key={i} onClick={() => handleClick(tag)}>{tag}</div>
          })
        }
      </div>
    </div>
  )
}

export default JobItem;
