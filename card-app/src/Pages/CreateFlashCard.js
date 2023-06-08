import { Outlet, NavLink } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

import Demo from "../Components/Demo";
import NewForm from "../Components/Formik";
import { Form } from "formik";
import MyForm from "../Components/Form";
import GroupForm from "../Components/GroupForm";

import Group_Form from "../Components/GroupForm copy";

const CreateFlashCard = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 flex  items-center justify-between h-16 ">
        <NavLink to="/">
          <span className="text-white font-extrabold text-4xl pl-8 pr-8 px-2 rounded-md">
            {" "}
            FlashKing
          </span>
        </NavLink>
      </div>
      <div className="body  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex w-full flex-row">
        {/* section */}
        <section className="main mt-1 mx-36 w-9/12 flex flex-col">
          {/* heading */}
          <div className="heading ml-[32%] ">
            <h1 className="t font-bold text-4xl text-indigo-900">
              Create Flash Card
            </h1>
          </div>
          {/* Nav buttons */}
          <div className="buttons flex space-x-0 w-100  mt-0 mb-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? ` text-white border-purple-900 border-2  mr-0 outline-none border-t-0 border-l-0 border-r-0 border-b-violet-800-700 pb-3 font-bold text-2xl  `
                  : `  border-purple-900  outline-none border-t-0 border-l-0 border-r-0 border-b-violet-800-700 pb-3 font-bold text-2xl `
              }
            >
              <span className="mx-10"> CreateNew</span>
            </NavLink>

            <NavLink
              to="/MyFlashCards"
              className={({ isActive }) =>
                isActive
                  ? ` text-white border-purple-900   mr-0 border-2 outline-none border-t-0 border-l-0 border-r-0 border-b-violet-800-700 pb-3 font-bold text-2xl  `
                  : `  border-purple-900  outline-none border-t-0 border-l-0 border-r-0 border-b-violet-800-700 pb-3 font-bold text-2xl `
              }
            >
              <span className="mx-10">My Flashcards</span>
            </NavLink>
          </div>
          {/* First Form */}
          {/* <Group_Form></Group_Form> */}
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default CreateFlashCard;
