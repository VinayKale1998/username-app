
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import CreateFlashCard from './Pages/CreateFlashCard'
import CreateNew from "./Pages/CreateNew";
import MyFlashCards from "./Pages/MyFlashCards";
function App() {


  const router = createBrowserRouter([
    {
      path:'', element:<CreateFlashCard></CreateFlashCard>, children:[
        {
          index:true,element:<CreateNew></CreateNew>
        },
        {
          path:'MyFlashCards',element:<MyFlashCards></MyFlashCards>
        }

      ]
    }
  ])
  return (
 <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
