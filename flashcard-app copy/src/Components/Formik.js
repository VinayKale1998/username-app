import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Demo.module.css";
import * as Yup from "yup";

const initialValues = {
  group: "",
  email: "",
};

const onSubmit = (values) => {
  console.log(values);
};

// const validate = (values) => {
//   let errors = {};

// console.log('validate')
//   if (!values.group) {
//     errors.group = "required";
//   }

//   if (!values.email) {
//     errors.email = "required";
//   }

//   if (
//     !/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/i.test(values.email)
//   )
//   {
//     errors.email = "Email invalid";
//   }

//   return errors;
// }

const validationSchema = Yup.object({
  group: Yup.string().required("Group is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
});
function NewForm() {


  // console.log("errors", formik.errors);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form >
        <label htmlFor="group">New Group*</label>
        <div>
          <Field
            id="group"
            type="text"
            name="group"
            maxLength="20"
            placeholder="Enter New Group Name"
            // onChange={formik.handleChange}
            // value={formik.values.group}
            // onBlur={formik.handleBlur}
            //refactor with formik method
            // {...formik.getFieldProps('group')}
            //now that we have changed the input tag to Field component , we no longer need binding
          ></Field>
          <ErrorMessage name="group"></ErrorMessage>
          {/* <h1 className={classes.error}>
            {formik.errors.group&&formik.touched.group? formik.errors.group : null}
          </h1> */}
        </div>
        <div>
          <label htmlFor="email">email</label>
          <Field
            type="email"
            maxLength="100"
            name="email"
        
          ></Field>
          <ErrorMessage name="email"></ErrorMessage>

          {/* <h1 className={classes.error}>
            {formik.errors.email && formik.touched.email? formik.errors.email : null}
          </h1> */}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default NewForm;
