import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

import Demo from "../Components/Demo";
import NewForm from "../Components/Formik";
import { Form } from "formik";
import MyForm from "../Components/Form";
import GroupForm from "../Components/GroupForm";
import Group_Form from "../Components/GroupForm copy";

const CreateFlashCard = () => {
  return (<div>
      <div className=" flex  items-center justify-between">
        <a href="/">
          <span className="text-white font-extrabold text-4xl pl-8 hover:bg-gray-700 pr-8 px-2 rounded-md">
            {" "}
            FlashKing
          </span>
        </a>
        <nav>
          <ul className="flex space-x-16 mr-20 ">
            <li className="cursor-pointer border border-purple-300 px-4  py-4 w-20 bg- place-self-end rounded-md hover:bg-white  hover:text-purple-900 text-white">
              Home
            </li>
            <li className="cursor-pointer border px-4 w-20 bg py-4  place-self-end rounded-md hover:bg-white hover:text-purple-900 text-white">
              About{" "}
            </li>
            <li className="cursor-pointer border px-2 w-20 bg py-4  place-self-end rounded-md hover:bg-white  hover:text-purple-900 text-white">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="body bg-red-300 flex w-full">
        {/* section */}
        <section className="main mt-10 mx-36 w-9/12 ">
          {/* heading */}
          <div className="heading">
            <h1 className="text-black font-bold text-4xl">Create Flash Card</h1>
          </div>
          {/* Nav buttons */}
          <div className="buttons flex w-100 mt-5 mx-2 space-x-8 mb-2">
            <button className="rounded-md w-fit  hover:bg-purple-700 hover:text-white">
              Create New
            </button>

            <button className="rounded-md  w-fit   hover:bg-purple-700 hover:text-white ">
              My FlashCard
            </button>
          </div>
          {/* First Form */}
         {/* <Outlet></Outlet> */}
        </section>
      </div>
    </div>
  )
};

export default CreateFlashCard;
