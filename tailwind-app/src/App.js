import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CreateFlashCard from "./Pages/CreateFlashCard";


function App() {
  const router = createBrowserRouter([
    
    {
      path:'/', element:<CreateFlashCard></CreateFlashCard>
    }
  
  ]);

  return  <RouterProvider router={router}></RouterProvider>;
}

export default App;
