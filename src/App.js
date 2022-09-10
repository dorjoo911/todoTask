import "./styles.css";
import { useState } from "react";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";
import TodoFoot from "../TodoFoot";

export default function App() {
  const [tasks, settask] = useState([
    { task: "task1" },
    { task: "task2" },
    { task: "task3" },
    { task: "task4" }
  ]);

  function deleteTask(task) {
    const newTask = tasks.filter((t) => t.task !== task);
    settask(newTask);
  }

  function addTask(task) {
    const newTasks = [...tasks];
    newTasks.unshift({ task: task });
    settask(newTasks);
  }

  const editTask = (task) => {
    const index = tasks.findIndex((t) => t.task === task);
    alert(index);
  };

  return (
    <div className="App">
      <TodoAdd addTask={addTask} />
      <TodoList
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <TodoFoot />
    </div>
  );
}
