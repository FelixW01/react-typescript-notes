import React from "react";



const NewTodo: React.FC = () => {
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        
    }

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text"></input>
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </>
  );
};

export default NewTodo;
