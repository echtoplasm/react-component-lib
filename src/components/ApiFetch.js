import React from 'react';
import { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [todo, setTodo] = useState();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const jsonResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await jsonResponse.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    };
    fetchTodo();
  }, []);

  return (
    <>
      <p>Fetch API description</p>
      <div className="card">
        {todo ? (
          <>
            <h3>Todo title: {todo.title}</h3>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ApiComponent;
