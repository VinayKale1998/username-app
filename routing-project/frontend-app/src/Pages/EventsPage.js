import { useEffect, useState } from "react";
import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [fetchedEvents, setFetchedEvents] = useState();
  //   const [error, setError] = useState();

  //   useEffect(() => {
  //     async function fetchEvents() {
  //       setIsLoading(true);
  //       const response = await fetch('http://localhost:8080/events');

  //       if (!response.ok) {
  //         setError('Fetching events failed.');
  //       } else {
  //         const resData = await response.json();
  //         setFetchedEvents(resData.events);
  //       }
  //       setIsLoading(false);
  //     }

  //     fetchEvents();
  //   }, []);

  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({message:'Something went wrong'}),{status:500})
    //alternative using the json() utility from the react-router-dom

    throw json(
      { message: "Something went wrong" },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json(); // as we use useLoaderData(), we can directly use the data without explicitly resolving it to compeltion
    return response;
  }
}
