function EditBtn({ task, editTask }) {
  return (
    <p>
      <button onClick={() => editTask(task)}>TodoEditButton</button>
    </p>
  );
}

export default EditBtn;
