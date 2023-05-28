import { Formik, Form, Field } from "formik";

const NewTerm = () => {
  return (
    <div>
      <Formik>
        <Form>
          <input type="text"/>
          <input type='text'/>
          <input type="file"/>
          
        </Form>
      </Formik>
    </div>
  );
};
export default NewTerm;
