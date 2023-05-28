import React from "react";
import classes from "./NewCardForm.module.css"
import NewTerm from "./NewTerm";
import {Formik,Form,Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues={
  
  group:'',
  description:''
}

const validationSchema = Yup.object({

  group:Yup.string().required('Required'),
  description:Yup.string().required('Description is required').test('len', 'Description should be of 100 characters at max', val => val.length >100)
})

const onSubmit=(values)=>
{
  console.log(values)
}
const NewCardForm = () => {



  return (
  
      <Formik validationSchema={validationSchema} onSubmit={onSubmit}  initialValues={initialValues}>
        <Form>
      
        <label for='group' >New Group*</label>
          <Field id='group' type="text" maxLength="20" placeholder="Enter New Group Name" name='group'></Field>
          <ErrorMessage name='group'></ErrorMessage>
          <label for='group' > Image</label>

          <input className={classes.fileInput} type="file" accept=".png,jpeg,jpg" name='description' ></input>
          <label for='group' >Description</label>
          <Field type="text" as='textarea' maxLength='101' name='description'></Field>
          <ErrorMessage name='description'></ErrorMessage>
       
 
        <button type="submit">create</button>
        </Form>
     
      </Formik>
  
  );
};

export default NewCardForm;