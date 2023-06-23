import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CreateFlashCard from "./Pages/CreateFlashCard";
import DummyPage from "./Pages/DummyPage";


function App() {
  const router = createBrowserRouter([
    
    {
      path:'/', element:<DummyPage></DummyPage>
    }
  
  ]);

  return  <RouterProvider router={router}></RouterProvider>;
}

export default App;
