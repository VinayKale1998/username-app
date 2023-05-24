import { useParams, Link, useRouteLoaderData,redirect} from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const param = useParams();
  const data = useRouteLoaderData("event-loader");

  return (
    <div>
      <EventForm event={data.event}></EventForm>

      <h1>
        <Link to=".." relative="path">
          Back{" "}
        </Link>
      </h1>
    </div>
  );
};

export default EditEventPage;

export async function action({ request,params }) {
  const data = await  request.formData();
  const method = request.method;
  console.log(method)

  const editedEvent = {
    date: data.get("date"),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
  };

  console.log(params.eventId);
   const response = await fetch('http://localhost:8080/events/'+params.eventId,{
    method:'PUT',
    headers:{
        'Content-Type':'application/JSON'
    }
    ,
    body:JSON.stringify(editedEvent)
})

return redirect('/events')

}

