import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import ArrayRender from './components/ArrayRender';

function App() {

  const [demo, setDemo]= useState(false)
   


  console.log("app running")
  const demoHandler=()=>{
    setDemo(true)
 
  }
  return (
    <div className="app">
      <ArrayRender items={useMemo(()=>{return [1,2,3,4]},[demo])} ></ArrayRender>
      <button onClick={demoHandler}> demo</button>
      {demo && <h1> app printed</h1>}
      <h1>Hi there!</h1>
    </div>
  );
}

export default App;
