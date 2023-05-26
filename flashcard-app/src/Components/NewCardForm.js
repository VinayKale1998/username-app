import React from "react";
import classes from "./NewCardForm.module.css"
import NewTerm from "./NewTerm";

const NewCardForm = () => {



  return (
  
      <form>
        <div>
        <label for='group' >New Group*</label>
          <input id='group' type="text" maxLength="20" placeholder="Enter New Group Name"></input>
          <label for='group' > Image</label>

          <input className={classes.fileInput} type="file" accept=".png,jpeg,jpg" ></input>
          <label for='group' >Description</label>
          <input type="text" maxLength="100"></input>
        </div>
       <NewTerm></NewTerm>

        <button type="submit">create</button>
      </form>
  
  );
};

export default NewCardForm;