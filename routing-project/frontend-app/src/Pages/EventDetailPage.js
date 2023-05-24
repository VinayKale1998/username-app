import { NavLink, useParams ,Link, useLoaderData,json, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem"

const EventDetailPage =()=>{
    const param = useParams()

     const data= useRouteLoaderData("event-loader")
     const event = data.event;

     console.log(event)
    return (
        <div>
            <h1>
                <EventItem event={event}></EventItem>
            </h1>
           <h1> <NavLink to="edit">Edit event {param.eventId}</NavLink></h1>

           <h1><Link to =".." relative='path'>Back </Link></h1>
        </div>
    )
}
export default EventDetailPage;

export  async function eventLoader({request,params})
{
    const id= params.eventId
    const response =await fetch("http://localhost:8080/events/"+id);

    if(!response.ok)
    {
        throw json({message:'Something went wrong from eventdetail'},{status:500})
    }

    return response;
}