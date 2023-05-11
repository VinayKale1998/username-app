const Timer =()=>{
    return (<div>
        {setInterval(()=>{
          <h1>{setTime(new Date().getTime())}</h1>
        },1000
        )} </div>)
    }
    
    export default Timer;