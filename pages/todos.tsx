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
    </div>
  );
};

export default TodosPage;
