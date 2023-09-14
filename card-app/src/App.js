import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateFlashCard from "./Pages/CreateFlashCard";
import CreateNew from "./Pages/CreateNew";
import MyFlashCards from "./Pages/MyFlashCards";
import FlashCardDetails from "./Pages/FlashCard";
import ErrorPage from "./Pages/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CreateFlashCard></CreateFlashCard>,
      errorElement:<ErrorPage/>,
      children: [
        {
          index: true,
          element: <CreateFlashCard></CreateFlashCard>,
        },
        // {
        //   path: "/MyFlashCards",
        //   element: <MyFlashCards></MyFlashCards>,
        // },
        // {
        //   path:'/MyFlashCards/:index',
        //   element:<FlashCardDetails></FlashCardDetails>
        // }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
