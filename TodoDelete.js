function DeleteBtn({ deleteTask, task }) {
  return (
    <p>
      <button onClick={() => deleteTask(task)}>TodoDeleteButton</button>
    </p>
  );
}

export default DeleteBtn;
