import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

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
        {todos.map((todo) => (
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
