import { createContext, useEffect, useState } from "react";

import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

  const [tasks, setTask] = useState([]);

  function createTask(task){
    setTask( [...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description,
    }] );
  }

  function deleteTask(taskId){
    console.log(taskId)
    setTask(tasks.filter( t => t.id !== taskId ));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return(
    <>
      <TaskContext.Provider value={ {
        tasks,
        createTask,
        deleteTask,
      } }>
        {props.children}
      </TaskContext.Provider>
    </> 
  );
};
