import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

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

  if (!response.ok) {
    throw json({ message: "Something went wrong" }, { status: 400 });
  }

//   else
//   {
//     return redirect('/events')
//   }

   return redirect('/events');
}
