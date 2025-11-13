import React, { useEffect, useState } from "react";

export default function Table() {
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((Response) => Response.json())
        .then(todosData => setTodos(todosData))
  }, [])

  
  return (
    <>
      {todos.map(todo => console.log(todo))}
    </>
  );
}