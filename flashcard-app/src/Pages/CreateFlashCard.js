import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

import Demo from "../Components/Demo";
import NewForm from "../Components/Formik";
import { Form } from "formik";
import MyForm from "../Components/Form";

const CreateFlashCard = () => {
  return (
    <div>
      <div className="w-full  border-gray-200 dark:bg-gray-900 bg-blue-200 h-20">
        <nav class= " border-gray-200 dark:bg-gray-900 bg-blue-200">
        <a> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-red-400 text-7xl">Flash</span></a>
        </nav>
  
      </div>

      <div>{/* <MainNavigation></MainNavigation> */}</div>
      {/* <div> */}
      {/* <Demo></Demo> */}
      {/* <NewForm></NewForm> */}
      {/* <Outlet></Outlet> */}
      {/* </div> */}
    </div>
  );
};

export default CreateFlashCard;
