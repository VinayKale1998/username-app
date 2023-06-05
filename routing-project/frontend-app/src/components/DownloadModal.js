import React from 'react'
import classes from "./DownloadModal.module.css"

import { ReactDOM } from 'react-dom'

const BackDrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClick}> </div>


}

const OverLay=(props)=>{
    return <div className={classes.overLay} > {props.children}</div>
}

function DownloadModal(props) {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClick={props.collapseHandler}></BackDrop>,document.getElementById('modal'))}
        {ReactDOM.createPortal(<OverLay onClick={props.collapseHandler}>{props.children}</OverLay>,document.getElementById('modal'))}
    </React.Fragment>
  )
}

export default DownloadModal