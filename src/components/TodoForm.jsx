import { useState } from "react";
const TodoForm = () => {
  const [value, setValue] = useState("");
  const handleChange = () => {
    alert("Yes");
  };
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
