import React from "react";
import Job from "./Job";

const JobList = ({ jobList, handleToggle, handleFilter }) => {
  return (
    <div>
      {jobList.map((job) => {
        return (
          <Job
            job={job}
            key={job.id}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        {" "}
        only liked{" "}
      </button>
    </div>
  );
};

export default JobList;
