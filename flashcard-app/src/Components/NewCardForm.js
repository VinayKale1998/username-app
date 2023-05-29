import React, { useReducer, useState } from "react";
import classes from "./NewCardForm.module.css";
import NewTerm from "./NewTerm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { deckActions, termActions } from "../Store";
import { useDispatch, useSelector } from "react-redux";

// const initialValues = {
//   group: "",
//   description: "",
// };

// const validationSchema = Yup.object({
//   group: Yup.string().required("Required"),
//   description: Yup.string().required("Description is required"),
// });

// const onSubmit = (values) => {
//   console.log(values);
// };

// const reducer=(state,action)=>{

//   return
// }

// const initialState={
//   group:{

//   },
//   terms:{
//     number:1,
//     data:[]

//   }
// }

const NewCardForm = () => {
  // const [deck,dispatch]= useReducer(reducer,initialState)
  const [image, setImage] = useState(null);
  const [group, setGroup] = useState("");
  const [description, setDescription] = useState("");

  const terms = useSelector((state) => state.terms);

  const dispatch = useDispatch();
 

  // const [terms, setTerms] = useState([
  //   {
  //     id: "m1",
  //     term: "",
  // //     definition: "",
  // //     image: "",
  // //   },
  // // ]);

  // let count=1;

  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const groupChangeHandler = (event) => {
    setGroup(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const deckAddHandler = (event) => {
    event.preventDefault();
    dispatch(deckActions.deckDetailsAdd({
      deckName:group,
      description:description,
      image:image,
      terms:terms
     }));
  };
  console.log()
  const termAddHandler=()=>{
    dispatch(termActions.addTerm())

  }

  const imageDeleteHandler = () => {
    setImage(null);
  };

  return (
    <React.Fragment>
      <div>
        <Formik>
          <Form>
            <label htmlFor="group">New Group*</label>
            <input
              id="group"
              type="text"
              maxLength="20"
              placeholder="Enter New Group Name"
              name="group"
              onChange={groupChangeHandler}
            ></input>

            <label htmlFor="group">Description</label>
            <textarea
              type="textArea"
              maxLength="101"
              name="description"
              onChange={descriptionChangeHandler}
            ></textarea>


            <label htmlFor="group"> Image</label>

            <input
              className={classes.fileInput}
              type="file"
              accept=".png,jpeg,jpg"
              name="description"
              onChange={imageChangeHandler}
            ></input>
            <button type="button" onClick={imageDeleteHandler}>
              {" "}
              Delete
            </button>
            {/* <button type='button' onClick={}></button> */}
            {image && (
              <img className={classes.image} src={image} alt="Term Image"></img>
            )}
            {image && (
              <input
                className={classes.fileInput}
                type="file"
                accept=".png,jpeg,jpg"
                name="description"
                onChange={imageChangeHandler}
              ></input>
            )}
          </Form>
        </Formik>
      </div>
      <div>
        {
          <ul>
            {terms.map((term) => (
              <li key={term.id}>
                <NewTerm group={group} id={term.id} term={term}></NewTerm>
              </li>
            ))}
          </ul>
        }
        <button type="button" onClick={termAddHandler}>
          Add more
        </button>
      </div>

     { <button type="submit" disabled={!terms.length>0} onClick={deckAddHandler}>create</button>} 
    </React.Fragment>
  );
};

export default NewCardForm;
