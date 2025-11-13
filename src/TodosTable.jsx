import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

export default function TodosTable() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState([]);

  const showTodosPerPage = 20;
  const numberOfPages = Math.ceil(todos.length / showTodosPerPage);


  let paginationItems = [];
  for (let number = 1 ; number <= numberOfPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
        {number}
      </Pagination.Item>
    );
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => Response.json())
      .then((todosData) => {setTodos(todosData);
      let endIndex = showTodosPerPage * currentPage
      let startIndex = endIndex - showTodosPerPage
      setTodosPerPage(todosData.slice(startIndex, endIndex))        
      })
  }, [currentPage])

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
          {todosPerPage.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>
                {todo.completed ? (
                  <Button variant="success">Done</Button>
                ) : (
                  <Button variant="warning">Pending</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination size="sm" className="justify-content-center">{paginationItems}</Pagination>
    </>
  );
}
