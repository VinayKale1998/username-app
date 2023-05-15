

import React from "react"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}>
        
    </div>


}

const OverLay=(props)=>{

return <div className={classes.modal}> {props.children}</div>

}

const Modal=(props)=>{  

    return(
        <React.Fragment>
            {ReactDOM.createPortal((<Backdrop onClose={props.onClose}></Backdrop>),document.getElementById('overLay'))}
            {ReactDOM.createPortal((<OverLay>{props.children}</OverLay>),document.getElementById('overLay'))}
        </React.Fragment>
    )

}
export default Modal;