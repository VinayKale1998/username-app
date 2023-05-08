import Card from "../UI/Card";
import classes from "./AddUser.module.css"
export default function AddUser(){

    const submitHandler=(event)=>{
        event.preventDefault();


    }

    return(
       
        <Card  className={classes.input} >
        <div>
            
    <form onSubmit={submitHandler}>
        
    <label htmlFor="userName" > User</label>
    <input type="text" id="userName"/> 
    <label htmlFor="year" > User</label>
    <input type="number" id="year" min="0"/> 
    <button type="submit"> Add user</button>
    </form>
    </div>
    </Card>


    
    )
}