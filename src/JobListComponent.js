import React from "react"
import JobComponent from "./JobComponent"

const JobListComponent = ({ allJobs, handleToggle, handleFilter }) => {
  return (
    <div>
      {allJobs.map((job) => {
        return (
          <JobComponent job={job} key={job.id + 1} handleToggle={handleToggle} handleFilter={handleFilter} />
        )
      })}

      <button style={{ margin: "20px" }} onClick={handleFilter}> Liked only </button>
    </div>
  )
}

export default JobListComponent
