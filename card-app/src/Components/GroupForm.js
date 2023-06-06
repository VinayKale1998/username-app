import React from "react";
import TermForm from "./TermForm";

function GroupForm() {
  return (
    <div>
      <div className=" firstform flex flex-col items-center mx-2 rounded-xl my-3 px-3 py-4 bg-white">
        <div className="flex flex-row items-center justify-start space-y-2 mx-2 rounded-md  px-1 py-4 w-full  ">
          <div className=" w-4/12">
            <label htmlFor="Group" className="mx-4 my-2 h-10 w-9/12">
              Create Group
            </label>
            <br></br>
            <input
              className="  rounded-md bg-white border-2 mx-4 my-2 h-10 w-11/12  border-black"
              placeholder="Group "
              id="Group"
            ></input>
          </div>

          <div className=" w-5/12 pt-3">
            <button
              className="rounded-md mx-3 my-4 border-2 border-black w-52 h-10 mr-48 "
              placeholder="Upload"
            >
              Upload
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mx-2 rounded-md  px-1 py-1 w-full  ">
          <label htmlFor="Description" className="mx-4 my-1 w-4/6">
            Add Description
          </label>
          <textarea
            className="rounded-md bg-white border-2 mx-4 my-4 w-4/6 h-28  border-black"
            type="textarea"
            placeholder="Description"
            id="Description"
          ></textarea>

          <input
            hidden
            className="rounded-md  bg-white mx-4 my-4"
            type="file"
          ></input>
        </div>
      </div>
      {/* second Form */}

      <div className=" firstform flex flex-col space-y-5 mx-2  rounded-xl my-5 px-3 py-4  bg-white">
        <div className="flex flex-row  space-y-2 mx-2 items-center  px-1  rounded-md just">
          <input
            className="  rounded-md bg-white border-2 mx-4 my-3 h-10 w-5/12  border-black"
            placeholder="Term "
          ></input>

          <input
            className="  rounded-md bg-white border-2 mx-4 my-3 h-10 w-5/12   border-black"
            placeholder="Term "
          ></input>

          <button
            className="rounded-md mx-4 my-4 border-2 border-black w-64 h-10 mr-15 w-2/12 "
            placeholder="Upload"
          >
            Upload
          </button>

          <input
            hidden
            className="rounded-md  bg-white mx-4 my-4 w-2"
            type="file"
          ></input>
        </div>
        <div className="flex flex-row  space-y-2 mx-2 items-center  px-1  rounded-md just">
          <button
            className="rounded-md mx-4 my-4 cursor-pointer  w-28"
            placeholder="Upload"
          >
            + Add More
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupForm;
