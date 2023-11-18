
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {


  const [list, setList] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pages}&_limit=10`)
      .then(response => setList(response.data))
      .catch(error => console.error(error));
  }, [pages]);

  const PreviousButton = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };

  const NextButton = () => {
    setPages(pages + 1);
  };

  return (
    <div className="App">
      <div className='container'>
      <h1>Todo List</h1>
      <ul>
        {list.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      <button onClick={PreviousButton}> ❮ Previous </button>
      <button onClick={NextButton}> Next ❯ </button>
      </div>
    </div>
  );
}
export default App;
