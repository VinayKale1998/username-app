import MainNavigation from "../Components/MainNavigation "
import classes from "./ErrorPage.module.css"


const ErrorPage =()=>{

    return (<div>
        <MainNavigation></MainNavigation>
        <main className={classes.content}>
            <h1> Something went wrong !! ... Couldn't find the page</h1>
        </main>
    </div>)
}

export default ErrorPage