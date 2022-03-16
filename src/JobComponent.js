import React from "react"

const JobComponent = ({ job, handleToggle }) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <div id={job.id} key={job.jobtitle} name="job" value={job.id} onClick={handleClick}
     className={job.liked ? "job liked" : "job"} > job: {job.jobtitle} 
     <div className="location"> {job.location} </div>
     </div>
  )
}

export default JobComponent
