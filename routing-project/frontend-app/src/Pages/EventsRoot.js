import EventsNavigation from "../components/EventsNavigation"
import { Outlet } from "react-router-dom"


const EventsRoot= ()=>{
    return(
       <div>
        <EventsNavigation></EventsNavigation>
        <div>
            <Outlet/>

            
        </div>
       </div>
    )
}

export default EventsRoot