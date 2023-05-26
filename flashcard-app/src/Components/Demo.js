import React from "react";
import { useFormik } from "formik";
import classes from "./Demo.module.css";

const initialValues = {
  group: "",
  email: "",
};

const onSubmit = (state) => {
  console.log(state);
};

const validate = (values) => {
  let errors = {};
console.log('validate')
  if (!values.group) {
    errors.group = "required";
  }

  if (!values.email) {
    errors.email = "required";
  }

  if (
    !/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/i.test(values.email)
  ) 
  {
    errors.email = "Email invalid";
  }

  return errors;
}

function Demo() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  
  console.log('errors',formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="group">New Group*</label>
        <div>
          <input
            id="group"
            type="text"
            name="group"
            maxLength="20"
            placeholder="Enter New Group Name"
            onChange={formik.handleChange}
            value={formik.values.group}
            onBlur={formik.handleBlur}
          ></input>
          <h1 className={classes.error}>
            {formik.errors.group&&formik.touched.group? formik.errors.group : null}
          </h1>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            maxLength="100"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            
          ></input>
          <h1 className={classes.error}>
            {formik.errors.email && formik.touched.email? formik.errors.email : null}
          </h1>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Demo;
