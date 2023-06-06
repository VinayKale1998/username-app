import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { termActions } from "../Store";
import { useState } from "react";
import classes from './NewTerm.module.css'

const NewTerm = ({ term,group}) => {
  const terms = useSelector((state) => state.terms);

  const [name,setName]=  useState('')
  const [definition,setDefinition] = useState('')
  const[image,setImage]=useState('')

  const dispatch = useDispatch();


  const nameChangeHandler=(event)=>{
    setName(event.target.value)
  }
  const defChangeHandler=(event)=>{
    setDefinition(event.target.value)
  }
  const imageChangeHandler=(event)=>{
    if(event.target.files && event.target.files[0])
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const changeHandler = () => {
    dispatch(
      termActions.changeHandler({
        id: term.id,
        term: name,
        definition: definition,
        image: image,
        group:group
      })
    );
  };
  return (
    <div>
      <Formik>
        <Form>
          <input type="text" onChange={nameChangeHandler } onBlur={changeHandler} />
          <input type="text" onChange={defChangeHandler}  onBlur={changeHandler}/>
          <input type="file" accept=".png,jpg,jpeg" onChange={imageChangeHandler}  onBlur={changeHandler}/>
          {image&&<img src={image} className={classes.image}></img>}
          
        </Form>
      </Formik>
    </div>
  );
};
export default NewTerm;
