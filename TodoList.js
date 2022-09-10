import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, editTask }) {
  const taskJSX = tasks.map((e, index) => (
    <TodoItem
      key={`${e}${index}`}
      task={e.task}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  return (
    <>
      <h4>TodoList</h4>
      {taskJSX}
    </>
  );
}
export default TodoList;
