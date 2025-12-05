import { useEffect, useState } from 'react';
import { fetchHello } from "./api/test";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState("");      // backend message
  const [count, setCount] = useState(0);   // optional counter
  
  useEffect(() => {
  fetchHello().then(data => {
    console.log("FROM BACKEND:", data.message);
    setMsg(data.message);
  });
}, []);

  useEffect(() => {
    fetchHello().then(data => setMsg(data.message));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Show backend message */}
      <h1>{msg || "Loading..."}</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
