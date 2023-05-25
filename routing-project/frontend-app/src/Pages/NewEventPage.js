import EventForm from "../components/EventForm";
import { json, redirect,useActionData } from "react-router-dom";

const NewEventPage = () => {
  return (
    <div>
      <EventForm></EventForm>
    </div>
  );
};

export default NewEventPage;

export async function action({ params, request }) {
  const data = await request.formData();


  const event = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };
  console.log(event);
  const response = await fetch("http://localhost:8080/events/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });

  if (response.status===422) {
    return response;
  }

  else
  {
    return redirect('/events')
  }

   
}
