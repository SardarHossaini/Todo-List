const Todo = ({ task }) => {
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div className="">
        <i className="fa fa-pen"></i>
        <i className="fa fa-trash"></i>
      </div>
    </div>
  );
};

export default Todo;
