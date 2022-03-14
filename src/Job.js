import React from "react";

const Job = ({ job, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={job.id}
      key={job.jobtitle}
      name="job"
      value={job.id}
      onClick={handleClick}
      className={job.like ? "job like" : "job"}
    >
      {job.jobtitle}
      <p> {job.description} </p>
    </div>
  );
};

export default Job;
