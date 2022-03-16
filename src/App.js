//import react, useState, useEffect, useRefs ...
import React, { useState } from "react"
//mock data
import data from "./data.json"
//components
import Header from "./Header"
import JobListComponent from "./JobListComponent"
import JobFormComponent from "./JobFormComponent"

function App() {
  const [allJobs, setJobs] = useState(data)

  const handleToggle = (id) => {
    let toggledList = allJobs.map((job) => {
      return job.id === Number(id) ? { ...job, liked: !job.liked } : { ...job }
    })
    setJobs(toggledList)
  }

  const handleFilter = () => {
    let likedJobs = allJobs.filter((job) => {
      return job.liked
    })
    setJobs(likedJobs)
  }

  const addJob = (userInput) => {
  let JobListWithNewJob = [...allJobs, { id: allJobs.length + 1, jobtitle: userInput.jobtitle, location: userInput.location, liked: false }]
  console.log(userInput.location)
  setJobs(JobListWithNewJob)
  }

  return (
    <div className="App">
      <Header />
      <JobListComponent allJobs={allJobs} handleToggle={handleToggle} handleFilter={handleFilter} />
      <JobFormComponent addJob={addJob} />
    </div>
  )
}

export default App
