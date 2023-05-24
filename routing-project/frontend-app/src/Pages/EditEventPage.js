import { useParams,Link,useRouteLoaderData} from "react-router-dom"
import EventForm from "../components/EventForm"

const EditEventPage =()=>{

    const param = useParams()
    const data = useRouteLoaderData("event-loader")
    
    return (
        <div>
          
             <EventForm event = {data.event}></EventForm>
            
            
           <h1><Link to =".." relative='path'>Back </Link></h1>
        </div>
    )
}

export default EditEventPage