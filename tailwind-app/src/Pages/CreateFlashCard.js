import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import {useState,useRef} from 'react'
import React from "react";
function CreateFlashCard() {
  const ref = React.useRef();
  return (
    <div className=" bg-white px-1 py-1 ">
      <nav className="bg-gradient-to-l from-purple-300 via-purple-400 to-purple-800 font-bold px-[0.5%] py-[1%]">
        <h1 className="ml-[0.5%]  font-sans  w-[10%]  text-xl sm:text-3xl  md:text-4xl lg:5xl  text-white   transition-all ">
          FlashKrew
        </h1>
      </nav>

      <div className="main my-2">
        {/* navigation */}
        <div className="Nav  my-1 py-1 px-1 ml-[10%]">
          <button className="text-lg sm:text-2xl  md:text-3xl     mx-1 my-1 bg-transparent font-bold text-purple-700 hover:text-black  transition-all">
            {" "}
            Create New
          </button>{" "}
          <button className="text-lg sm:text-2xl  md:text-3xl  mx-1 my-1 bg-transparent  font-bold text-purple-700  hover:text-black  transition-all">
            My FlashCards
          </button>
        </div>

        {/* page header */}
        <div className="Heading my-1 py-1 px-1 mx-auto ml-[28%] sm:ml-[35%]  transition-all cursor-pointer">
          <h1 className="heading font-bold  text-lg sm:text-2xl  md:text-3xl lg:text-4xl  text-purple-900  transition-all  ">
            
            Create Flash Card
          </h1>
        </div>

        {/* first form */}
        <section className="first-form bg-purple-200 my-1 py-1 px-1  mx-[2%]   flex flex-col sm:mx-[7%] md:mx-[8%] lg:mx-[8%]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all">
          {/* GroupName and Upload combined */}
          <div className="flex items-start  mx-1 py-1 ">
            {/* GroupName label and input */}
            <div className="groupName min-w-[70%] flex flex-col px-[0.2%] py-[0.2%] mx-[0.2%]  my-[0.1%] sm:min-w-[60%] md:min-w-[50%] transition-all">
              {/* grouplabel */}
              <label className="pl-1 py-1  w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                Group Name <span className="text-red-600 ">*</span>
              </label>

              {/* groupInput */}
              <input
                className="  bg-white px-1 py-1 x w-[99.8%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-[12px]  md:text-base lg:text-xl transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-100  placeholder: "
                placeholder="Enter Group Name"
              ></input>
              <h1 className="groupError hidden  text-red-600 text-[10px] text-xs sm:text-sm ">
                {" "}
                This field is required!
              </h1>
            </div>

            {/*group image upload*/}
            <div className="max-w-[30%] min-w-[18%]   px-[0.2%] py-[0.2%] ml-[0.4%]  overflow-hidden flex flex-col items-center justify-center">
              {/* dummylabel */}
              <label className="pl-1 py-1  text-transparent w-[99.8%] text-xs md:text-base lg:text-xl transition-all  font-bold">
                <span className="text-red-600  text-transparent">*</span>
              </label>

              <button className=" group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex space-x-1 bg-white px-2 py-1 x w-[99.8%]   transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-600 hover:text-white  items-center justify-center ">
                <span className="pt-[3px] text-xs md:text-base lg:text-xl mx-[1%] text-purple-700 font-extrabold group-hover:text-inherit">
                  <FiUpload></FiUpload>
                </span>
                <span className="text-[12px] md:text-base lg:text-lg font-bold text-purple-700 group-hover:text-inherit">
                  Upload
                </span>
              </button>

              <h1 className="groupError hidden  text-red-600 text-xs sm:text-[14px] md:text-[16xpx]  transtion-all">
                {" "}
                Image size should be less than 2MB
              </h1>
            </div>
          </div>

          {/* group description and label  */}
          <div className="groupName max-w-[95%] flex flex-col px-[0.2%] py-[0.2%] mx-1  my-1 sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] transition-all">
            {/* description label */}
            <label className="pl-1 py-1  w-[99.5%] text-xs md:text-base lg:text-xl transition-all  font-bold ml-1">
              Group Description
            </label>

            {/*  group description input */}
            <textarea
              className="  bg-white  my-1 px-1 py-1 x w-[99.8%]   text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:text-base lg:text-xl transition-all outline-none hover:border-2 hover:border-purple-700 hover:bg-purple-100   "
              placeholder="Enter Group Description"
            ></textarea>
            {/* image upload hidden input */}
            <input className="mx-1 my-1 bg-white px-2 py-1 hidden"></input>
          </div>
        </section>

        {/* second formx */}
        <section className=" mt-6 second-form bg-purple-200 my-[0.5%] py-1 px-1 mx-[2%]    flex flex-col sm:mx-[7%] md:mx-[8%] lg:mx-[8%] transition-all shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          {/* single term input */}

          <div className="flex space-x-1 flex-wrap px-1 py-1 mx-1 my-1 grow space-y-1 items-start ">
            {/* index */}
            <h1 className=" w-4 h-4 shrink-0 mt-2 bg-purple-400 px-1 py-1 rounded-full flex items-center justify-center    text-[10px] sm:text-[14px] md:text-[16xpx] lg:text-[20px]  font-bold transtion-all sm:w-6 sm:h-6 md:w-8 md:h-8  lg:w-10 lg:h-10">
              1{" "}
            </h1>

            {/*term name input*/}
            <div className="  px-[0.5%]  min-w-[70%]  py-[0.5%] shrink-0 grow-[2]  sm:min-w-[20%] pr-[40%]   sm:pr-0 bg-red-200 flex overflow-hidden">
              <input
                className=" px-1 py-1 w-[99.5%] bg-white text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  md:text-base lg:text-xl transition-all  hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline-none"
                placeholder="Enter Term Name"
              ></input>
            </div>

            {/* term description */}
            <div className="   min-w-[94%]  pl-[3%] py-[0.5%]  grow-[3]   sm:min-w-[50%] sm:pl-[0.2%]  flex">
              <textarea
                className=" py-1 bg-white  w-[99.5%] px-1 text-[12px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:text-base lg:text-xl transition-all overflow-hidden hover:border-2 hover:border-purple-700 hover:bg-purple-100  outline-none"
                placeholder="Enter Term Description"
              ></textarea>
            </div>

            {/* term image upload */}
            <div className="  px-[3%] py-[1%]  grow-[2] max-w-[30%]   sm:w-auto sm:min-w-[15%] flex  items-center ">
              <button className=" group w-[99.5%] px-[0.1%] py-[2%] bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-[12px]  md:text-base lg:text-xl transition-all font-bold flex   hover:border-purple-700 hover:bg-purple-600 hover:text-white  justify-center">
                <span className="pt-[3px] text-xs md:text-base lg:text-xl  mx-[3%] text-purple-700 group-hover:text-inherit">
                  <FiUpload></FiUpload>
                </span>{" "}
                <span className="text-[12px]  md:text-base lg:text-lg font-bold text-purple-700 group-hover:text-inherit ">
                  {" "}
                  Upload
                </span>
              </button>
            </div>
          </div>

          {/* addmore button */}
          <div>
            <button className=" ml-[2%] mx-1 my-1  px-[0.4%] py-[0.4%] text-purple-800 font-bold text-[12px]  md:text-base lg:text-xl transition-all duration-250 hover:scale-110   hover:text-purple-600 ">
              Add More +{" "}
            </button>
          </div>
        </section>
        <button
          type="submit"
          className="py-2 px-6 rounded-sm bg-purple-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  ml-[40%]  text-base  sm:text-xl  md:text-2xl  transition-all text-white hover:bg-purple-700 hover:text-white  flex  "
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateFlashCard;
