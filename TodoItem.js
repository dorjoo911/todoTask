import DeleteBtn from "./TodoDelete";
import EditBtn from "./TodoEdit";

export default function TodoItem({ task, deleteTask }) {
  return (
    <div>
      <hr></hr>
      <p>Task: {task}</p>

      <DeleteBtn deleteTask={deleteTask} task={task} />

      <EditBtn />
    </div>
  );
}
/*
designing components
props and state, 
useState hooks,
component life cycle
useEffect vs componentDidAmount,Update,Delete
*/
