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
          <span className="font-bold">{props.title} </span>
        </header>
        <div className={classes.content}><span className="font-bold">{props.message}</span></div>
        <footer className={classes.actions}>
          <Btn onClick={props.onDismiss}>Cancel</Btn>
        </footer>
      </div>
    </Card>
  );
};

export default function ErrorModal(props) {
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
