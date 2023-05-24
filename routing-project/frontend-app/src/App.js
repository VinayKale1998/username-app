// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import EventDetailPage, { eventLoader } from "./Pages/EventDetailPage";
import EventsPage from "./Pages/EventsPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import EventsRoot from "./Pages/EventsRoot";
import { eventsLoader } from "./Pages/EventsPage";
import ErrorPage from "./Pages/ErrorPage";
// import {eventLoader} from './Pages/EventDetailPage'
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>,
        },
        {
          path: "events",
          element: <EventsRoot></EventsRoot>,
          children: [
            {
              index: true,
              element: <EventsPage></EventsPage>,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              id: "event-loader",
              loader: eventLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage></EventDetailPage>,
                },

                {
                  path: "edit",
                  element: <EditEventPage></EditEventPage>,
                },
              ],
            },
            { path: "new", element: <NewEventPage></NewEventPage> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
