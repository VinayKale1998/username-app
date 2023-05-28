import React, { useReducer, useState } from "react";
import classes from "./NewCardForm.module.css";
import NewTerm from "./NewTerm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  group: "",
  description: "",
};

const validationSchema = Yup.object({
  group: Yup.string().required("Required"),
  description: Yup.string()
    .required("Description is required")

});

const onSubmit = (values) => {
  console.log(values);
};

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

  const [deck,dispatch]= useReducer(reducer,initialState)
  const [image, setImage] = useState(null);

  const [terms, setTerms] = useState([
    {
      id: "m1",
      term: "",
      definition: "",
      image: "",
    },
  ]);

  let count=1;

  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const termAddHandler = () => {
    ++count;

    setTerms((prevState) => [
 
      ...prevState,
      { id: `m${count}`, term: "", definition: "", image: "" },
    ]);
  };

  const imageDeleteHandler = () => {
    setImage(null);
  };

  return (
    <React.Fragment>
      <div>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          <Form>
            <label for="group">New Group*</label>
            <Field
              id="group"
              type="text"
              maxLength="20"
              placeholder="Enter New Group Name"
              name="group"
            ></Field>
            <ErrorMessage name="group"></ErrorMessage>
            <label for="group"> Image</label>

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
            <label for="group">Description</label>
            <Field
              type="text"
              as="textarea"
              maxLength="101"
              name="description"
            ></Field>
            <ErrorMessage name="description"></ErrorMessage>

            
          </Form>
        </Formik>
      </div>
      <div>
       {
        <ul>
          {terms.map(term=> <li><NewTerm term={term} key={term.id}></NewTerm></li>)}
        </ul>
       }
        <button type="button" onClick={termAddHandler}>
          Add more
        </button>
      </div>

      <button type="submit">create</button>
    </React.Fragment>
  );
};

export default NewCardForm;
