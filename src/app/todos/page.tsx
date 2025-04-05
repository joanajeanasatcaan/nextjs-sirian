'use client';

import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="todos-container">
      <h1>Todos</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : 'pending'}`}
          >
            {todo.todo}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .todos-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .todo-list {
          list-style-type: none;
          padding: 0;
        }

        .todo-item {
          font-size: 1.2rem;
          padding: 10px;
          margin: 10px 0;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .completed {
          background-color: #e0f7e0;
          color: green;
          text-decoration: line-through;
        }

        .pending {
          background-color: #ffe0e0;
          color: red;
        }

        .todo-item:hover {
          background-color: #f4f4f4;
        }
      `}</style>
    </div>
  );
};

export default TodosPage;
