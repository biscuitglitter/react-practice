import React, { useState } from "react";
// mock data
import data from "./data.json";
import Header from "./Header";
import JobList from "./JobList";
import JobForm from "./JobForm";

function App() {
  const [jobListVariable, setJobList] = useState(data);
  // toDoList is the variable that will hold our state
  // our state here is data which is the array that holds the data (todo) objects

  const handleToggle = (id) => {
    let mappedList = jobListVariable.map((job) => {
      return job.id === Number(id) ? { ...job, like: !job.like } : { ...job };
    });
    setJobList(mappedList);
  };

  const handleFilter = () => {
    let likedJobs = jobListVariable.filter((job) => {
      return job.like === true;
    });
    console.log(likedJobs);
    setJobList(likedJobs);
  };

  // setJobList was used twice because is it a method that allows me
  // to update/work with the data that is being held by the variable

  const addJob = (userInput) => {
    let copy = [...jobListVariable];
    copy = [
      ...copy,
      { id: jobListVariable.length + 1, jobtitle: userInput, like: false }
    ];
    setJobList(copy);
  };

  // in the return we have the JobList component that holds the jobList variable that holds the jobs which is datajson
  // jobListVariable = variable, JobList = component that renders the stuff, data = jobs as json objects

  return (
    <div className="App">
      <Header />
      <JobList
        jobList={jobListVariable}
        handleToggle={handleToggle}
        filterLiked={handleFilter}
      />
      <JobForm addJob={addJob} />
    </div>
  );
}

export default App;
