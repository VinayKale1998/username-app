import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const ErrorPage=()=>{

    const error = useRouteError();
    console.log(error)
    const errorMessage =   error.data.message;
    const errorStatus= error.status

    return (<div>
        <div>
            <MainNavigation></MainNavigation>
        </div>
        <div>
            <h1>{errorMessage}</h1>
            <h1>{errorStatus}</h1>
        </div>
    </div>)
}

export default ErrorPage