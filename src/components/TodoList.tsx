import React from "react";

// you have to be specific when passing props
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      <li>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </li>
        ))}
      </li>
    </ul>
  );
};

export default TodoList;
