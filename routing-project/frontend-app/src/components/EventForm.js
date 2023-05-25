import { useNavigate,Form,useNavigation, useActionData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation  = useNavigation();
  const response = useActionData();

  const isSubmitting = navigation.state==='submitting';
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form  method ={method} className={classes.form}>
     
      {response&&response.errors &&(<ul>
        {Object.values(response.errors).map(error=><li key={error}>{error}</li>)}
      </ul>)}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?event.title:""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?event.image:''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required  defaultValue={event?event.date:''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required  defaultValue={event?event.description:''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting?'Submitting...':'Submit'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
