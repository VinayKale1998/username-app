import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [userName, setName] = useState("");
  const [age, setAge] = useState("");

  const[error,setError]=useState();

  const [nameValid, setNameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);
 
  const userAddNameHandler = (event) => {
    setName(event.target.value);
    setNameValid(true);
  };
  const userAgeHandler = (event) => {
    setAge(event.target.value);
    setAgeValid(true);
  };


  
  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.trim() === "" || age.trim() === "") {
        setError(
            {
                title:"Invalid Input",
                message:"Please enter valid name and age"
            }
        )
      return;
    }

    if (+age.trim() < 1) {
      setAgeValid(false);

      
       
    }


    const userData= {
        key:Math.random(),
    name:userName,
    age:age}

    props.onItemAdd(userData)

    setName("");
    setAge("");
  };
  
  const dismissHandler=()=>{
    setError(null)
  }


  return (
    <div>

       {error?<ErrorModal title={error.title} message ={error.message} onDismiss={dismissHandler}></ErrorModal>:""}
      
    <Card className={classes.input}>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName"> User</label>
          <input
            className={nameValid ? classes.valid : classes.inValid}
            type="text"
            id="userName"
            onChange={userAddNameHandler}
            value={userName}
          />
          <label htmlFor="year"> Age</label>
          <input
            className={ageValid ? classes.valid : classes.inValid}
            type="number"
            id="year"
            onChange={userAgeHandler}
            value={age}
          />
          <Button className="button" > Add User</Button>
        </form>
      </div>
    </Card>
   
    </div>
  );
}
