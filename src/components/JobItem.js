import React from 'react';

// Renders a singular job in the list
const JobItem = ({ job, handleClick }) => {
  // Gives a thicker, cyan-ish left border if the job is featured
  const isFeatured = job => job.featured && 'border-l-4 ';

  /* const handleClick = (item) => {
    const jobArr = [];
    job.languages.map(x => jobArr.push(x));
    job.tools.map(x => jobArr.push(x));

    if(job.role === item) {
      console.log(item);
    }
    else if(job.level === item) {
      console.log(item);
    }
    else if(jobArr.includes(item)) {
      console.log(item);
    }
  } */

  // map through languages or tools
  const loopCategories = (items) => {
    return items.map(item => {
      return (
        <div 
          className="category"
          key={item}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      )
    });
  }

  // Fetching urls from a local json file didn't work as excpected like with an import
  // So I used the require + default combo to make it fully functional with the 'logo' property
  // I also removed './images' from every logo property to make it more unique
  return (
    <div 
      className={`flex justify-between shadow-lg rounded h-36 w-full p-8 mb-6 ${isFeatured(job)} bg-white`}
      style={{ 
        borderLeftColor: job.featured && 'hsl(180, 29%, 50%)' 
      }}
    >
      <div className="flex h-auto">
        <img 
          src={require(`../images/${job.logo}`).default} 
          alt={job.company} 
          className="h-20 w-20 rounded-lg"
        />
        <div className="flex flex-col justify-center px-5 gap-1">
          <div className="flex gap-3 leading-normal">
            <p className="text-primary text-sm">{job.company}</p>
            <div 
              className="flex text-white items-center gap-1 leading-3"
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
          <p className="font-bold text-lg">{job.position}</p>
          <ul
            className="text-bottom-info text-sm"
            id="bottom-line"
          >
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div onClick={() => handleClick(job.role)} className="category">{job.role}</div>
        <div onClick={() => handleClick(job.level)} className="category">{job.level}</div>
        {loopCategories(job.languages)}
        {job.tools.length > 0 && loopCategories(job.tools)}
      </div>
    </div>
  )
}

export default JobItem;
