import React from 'react';
import { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [todo, setTodo] = useState();
  const [id, setId] = useState(1);

  const increaseId = () => {
    setId(prevId => prevId + 1);
  };

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const jsonResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await jsonResponse.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    };
    fetchTodo();
  }, [id]);

  return (
    <>
      <p className='explainer'>
        The Fetch API is a modern JavaScript interface for making HTTP requests. It returns
        Promises, making it perfect for async/await syntax. Unlike the older XMLHttpRequest, Fetch
        is cleaner and more powerful, letting you easily GET data from APIs, POST form submissions,
        or handle any HTTP method. It's built into all modern browsers and works seamlessly with
        JSON, making it the standard way to communicate with servers in web applications.
      </p>
      <div className="card">
        {todo ? (
          <>
            <h3>Todo title: {todo.title}</h3>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={increaseId}>Fetch new todo</button>
      </div>
    </>
  );
};

export default ApiComponent;
