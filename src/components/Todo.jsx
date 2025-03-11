const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="">
        <i className="fa fa-pen" onClick={() => editTodo(task.id)}></i>
        <i className="fa fa-trash" onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  );
};

export default Todo;
