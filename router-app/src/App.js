import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import Products from "./Routes/Products";
import Root from "./Routes/Root";
import ErrorPage from "./Routes/ErrorPage";
import ProductDetailsPage from "./Routes/ProductDetailsPage";
// import { createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {path:"products/:productId", element:<ProductDetailsPage></ProductDetailsPage>},
      { path: "",index:true, element: <Homepage></Homepage> },
      { path: "products", element: <Products></Products> },
    ],
  },
]);

//an alternative approach to defining routes

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Homepage></Homepage>}></Route>
//     <Route path='/products' element={<Products></Products>}></Route>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
