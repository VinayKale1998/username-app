import classes from "./BookingConfirmModal.module.css";
import Card from "./Card";

import ReactDOM from "react-dom";
import React from 'react'

// A booking conirmation modal will render upon 200 status, rendered via react portal 

// acts as a mask from the root div render 
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDismiss}></div>;
};

//Overaly which contains confirmation message
const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div>
        <header className={classes.header}>
          <span className="font-bold">{props.title} </span>
        </header>
        <div className={classes.content}><span className="font-bold">{props.message}</span></div>
        <footer className={classes.actions}>
          
        </footer>
      </div>
    </Card>
  );
};

export default function BookingConfirmModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        document.getElementById("backDropRoot")
      )}
      {ReactDOM.createPortal((<ModelOverlay onDismiss={props.onDismiss} title= {props.title} message={props.message}></ModelOverlay>),document.getElementById('overyLay'))}
    </React.Fragment>
  );
}
