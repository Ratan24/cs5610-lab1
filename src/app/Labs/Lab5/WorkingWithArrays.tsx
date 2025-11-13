"use client";

import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (todo: any) => {
    const updated = await client.removeTodo(todo);
    setTodos(updated);
  };

  const createNewTodo = async () => {
    const updated = await client.createNewTodo();
    setTodos(updated);
  };

  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false
    });
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      <h4>
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />

            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
              disabled
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.title}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
