import { useEffect, useState } from "react";
import styled from "styled-components";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

const WebContainer = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const ManagerContainer = styled.div`
  width: 430px;
  text-align: center;

  & > * + * {
    margin-top: 23px;
  }
`;

const TitleH1 = styled.h1`
  font-size: 27px;
  color: white;
  font-weight: bold;
`;

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // The useEffect() will to execute the function always that some value in list will changed
  useEffect(() => {
    // function
    localStorage.setItem("tasks", JSON.stringify(tasks));
    /* 
      LocalStorage.setItem(key, value) -> will to store one data in browser's local storage
        - Key: A string name that represents the data that you stored.
        - Value: The data that will be stored and associated with the key
      
        JSON.stringify() -> will to convert the object to JSON string

    */
  }, [tasks]); //list

  // Calling an API for get the tasks
  useEffect(() => {
    async function fetchTask() {
      // Call the API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      // Get the data it returns
      const data = await response.json();
      // console.log(data);

      // to store/persist this data in the state
      setTasks(data);
    }
    // fetchTask();
  }, []); // if list is empty this useEffect will only be executed in first time that the user enters my application

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const deleteTasks = tasks.filter((task) => task.id != taskId);
    setTasks(deleteTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <WebContainer>
      <ManagerContainer>
        <TitleH1>Gerenciador de tarefas</TitleH1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </ManagerContainer>
    </WebContainer>
  );
}

export default App;
