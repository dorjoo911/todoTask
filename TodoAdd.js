import { useState } from "react";

export default function TodoAdd({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const [success, setsuccess] = useState(false);

  function changed(e) {
    setsuccess(false);
    setNewTask(e.target.value);
  }

  function addTaskAndClear() {
    addTask(newTask);
    setNewTask("");
    setsuccess(true);
  }

  return (
    <div>
      <h4>Add a todo item</h4>
      <input value={newTask} onChange={(event) => changed(event)} />
      <button onClick={addTaskAndClear}>Add</button>
      {success && <p>Successfully added</p>}
    </div>
  );
}
