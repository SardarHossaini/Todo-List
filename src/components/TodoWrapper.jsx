import TodoForm from "./TodoForm";
import { useState } from "react";
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="TodoWrapper">
      <TodoForm />
    </div>
  );
};

export default TodoWrapper;
