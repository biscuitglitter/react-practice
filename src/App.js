import React, { useState } from "react";
// mock data
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);

  // toDoList is the variable that will hold our state
  // our state here is data which is the array that holds the data (todo) objects

  const handleToggle = (id) => {
    let mappedList = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mappedList);
  };

  const handleFilterCompleted = () => {
    let filterCompletedTasks = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filterCompletedTasks);
  };

  // settodolist was used twice because is it a method that allows me
  // to update/work with the data that is being held by the variable

  const addTask = (userInput) => {
    //
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(copy);
  };

  // in the return we have the ToDoList component that holds the toDoList variable that holds the todos which is datajson
  // toDoList = variable, ToDoList = component that renders the stuff, data = todos as json objects

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilterCompleted}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
