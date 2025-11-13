import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function TodosTable() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => Response.json())
      .then((todosData) => setTodos(todosData));
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? <Button variant="success">Done</Button> : <Button variant="warning">Pending</Button>}</td>
            </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
}
