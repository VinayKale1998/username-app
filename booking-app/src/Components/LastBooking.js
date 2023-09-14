import React, { useEffect, useState } from "react";

import { BiSolidMoviePlay } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { MdEventSeat } from "react-icons/md";
import { URL } from "../Store/data";
import { useSelector } from "react-redux";

//renders the last booking details by fetching the backend API for first render, if booking confirmed
// with 200 status code, the fetch will be bypassed and last booking data will be rendered from local state 
function LastBooking(props) {
  const [data, setData] = useState({ movie: null, seats: null, slot: null });
  //gathering the last booking data state
  const lastBooking = useSelector(state=>state.lastBooking)
  //the function inside useeffect will run for the first time and
  // getData will not be called if there is no a page reload, the lastbooking data will be updated with the props gathered from the recent state
  // the if condition inside blocks the fetch if there is data present locally for the last booking

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        const dataParsed = await response.json();
        setData(dataParsed);
        // console.log(data);
      } catch (err) {
        console.log(err.response);
      }
    };
    // if there is no booking data in the redux state , it will fetch from the API
    if (lastBooking.data == null) {
      getData();
    } else {
      setData(lastBooking.data);
    }
  },[lastBooking.data]);

  return (
    <div className={props.className}>
      {data.movie == null && lastBooking.data== null && (
        <div>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold  px-1 py-1 overflow-visible ">
            No Previous booking found
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold  px-1 py-1 ">
            Grab your first popcorn with us!!!
          </h1>
        </div>
      )}

      {data.seats != null && (
        <div>
          <h1 className="font-bold  text-sm transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl text-white underline">
            Last Booking Details
          </h1>
          <h1 className=" flex  flex-row justify-start items-start text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg  font-bold bg-red-200 mx-1 my-1 px-1 py-1 rounded-md ">
            <span className="font-bold bg-red-200 pt-1 ">
              <BiSolidMoviePlay></BiSolidMoviePlay>{" "}
            </span>
            <span> : {data.movie}</span>
          </h1>
          <div className=" bg-red-200  tems-center justify-center w-[50%] ml-[2%] rounded-md px-2 py-2">
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
              <span className="font-bold bg-red-200 ">
                <MdEventSeat></MdEventSeat>{" "}
              </span>
            </h1>
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
              A1:{data.seats.A1}
            </h1>
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
              A2:{data.seats.A2}
            </h1>
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
              A3:{data.seats.A3}
            </h1>
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
              A4:{data.seats.A4}
            </h1>
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
              D1:{data.seats.D1}
            </h1>
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold text-bold">
              D2:{data.seats.D2}
            </h1>
          </div>

          <h1 className="  flex mx-1 my-1 text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold text-bold bg-red-200  rounded-md">
            <span className="font-bold ">
              <BiTime></BiTime>{" "}
            </span>
            : {data.slot}{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default LastBooking;
