import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Btn from "./Btn";
import ReactDOM from "react-dom";
import React from 'react'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDismiss}></div>;
};

const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div>
        <header className={classes.header}>
          <span>{props.title} </span>
        </header>
        <div className={classes.content}>
            <h1><span className="font-bold">Movie: </span>{props.message.movie}</h1>
            <h1><span className="font-bold">Slot: </span>{props.message.slot}</h1>
        </div>
        <footer className={classes.actions}>
          <Btn onClick={props.onConfirm}>confirm</Btn>
          <Btn onClick={props.onCancel}>Cancel</Btn>
        </footer>
      </div>
    </Card>
  );
};

export default function ConfirmationModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        document.getElementById("backDropRoot")
      )}
      {ReactDOM.createPortal((<ModelOverlay onConfirm={props.onConfirm} onCancel={props.onCancel} title= {props.title} message={props.message}></ModelOverlay>),document.getElementById('overyLay'))}
    </React.Fragment>
  );
}
