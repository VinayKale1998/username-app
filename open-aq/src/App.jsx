import { useState, useEffect } from "react";
import axios from "axios";
import { fetchContent } from "./Store";
import  {useDispatch, useSelector } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.measurements.isLoading);
  const error = useSelector((state) => state.measurements.error);
  const content = useSelector((state) => state.measurements.content);


  useEffect(() => {
    dispatch(fetchContent(-1));
  }, [dispatch]);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>{isLoading && "Isloading"}</div>
        <div>{error && `${error}`}</div>
        <div>
          {content.length > 0 &&
            content.map((item, index) => <pre key={index}>{JSON.stringify(item, null, 10)}</pre>)}
        </div>
      
      </div>
      
    
    </>
  );
}

export default App;
