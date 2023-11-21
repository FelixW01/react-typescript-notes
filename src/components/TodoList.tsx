import React from "react";

// you have to be specific when passing props
interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      <li>
        {props.items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </li>
    </ul>
  );
};

export default TodoList;
