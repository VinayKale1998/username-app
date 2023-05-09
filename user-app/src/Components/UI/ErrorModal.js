import classes from "./ErrorModal.module.css"
import Card from "../UI/Card"
import Button from "./Button"
export default function ErrorModal(props){




    return (
        <div>
            <div className={classes.backdrop} onClick={props.onDismiss}> </div>
        <Card className={classes.modal}>
            <div>
                <header className={classes.header}> 
                   <span>{props.title} </span> 
                </header>
                <div className={classes.content}>
                    {props.message}
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onDismiss} >Cancel</Button>
                </footer>
            </div>  
        </Card>
        </div>
    )
}