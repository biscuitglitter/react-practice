import React, { useState } from "react"

const JobFormComponent = ({ addJob }) => {
  const [allUserInput, setUserInput] = useState({jobtitle: "", location: ""})

  const handleChange = (e) => {
    e.preventDefault()
    setUserInput({...allUserInput,
    [e.target.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addJob(allUserInput)
    setUserInput({jobtitle: "", location: ""})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={allUserInput.jobtitle} name="jobtitle" type="text" onChange={handleChange} 
      placeholder="Enter job..." />
      <input value={allUserInput.location} name="location" type="text" onChange={handleChange} 
      placeholder="Enter location..." />
      <button>Add</button>
    </form>
  )
}

export default JobFormComponent
