import { useState } from 'react'
import axios from "axios";
import { fetchContent } from './Store';
import useDispatch, { useSelector } from "react-redux";
import { UseSelector } from 'react-redux';
import './App.css'





function App() {
  const [count, setCount] = useState(0)
  const isLoading = useSelector(state=>state.measurements.isLoading);
  const error = useSelector(state=>state.measurements.error);

  const env = process.env.NODE_ENV;
  

  return (
    <>
      <div>
     
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {process.env.NODE_ENV}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <select >
        <li> </li>
      </select>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
