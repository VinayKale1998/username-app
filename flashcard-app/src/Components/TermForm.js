import React from 'react'

function TermForm() {
  return (
  
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
    

  )
}

export default TermForm