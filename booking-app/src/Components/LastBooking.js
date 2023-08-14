import React, { useEffect, useState } from "react";
import { seats } from "../Store/data";
import { useSelector } from "react-redux";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { MdEventSeat } from "react-icons/md";



function LastBooking(props) {
  const [data, setData] = useState({ movie: null, seats: null, slot: null });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/booking");
        const dataParsed = await response.json();
        setData(dataParsed);
        console.log(data);
      } catch (err) {
        console.log(err.response);
      }
    };

    getData();

    // return () => {
    //   getData();
    // };
  }, []);

  return (
    <div className={props.className}>
      {data.movie == null && (
        <div >
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold  px-1 py-1 overflow-visible ">
          No Previous booking found
         </h1>
         <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold  px-1 py-1 ">
          Grab your first popcorn with us!!!
         </h1>
        </div>
        

        
      )}

      {data.seats != null && (
        <div  >
          <h1 className="font-bold  text-sm transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl text-white underline">Last Booking Details</h1>
          <h1 className=" flex  flex-row justify-start items-start text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg  font-bold bg-red-200 mx-1 my-1 px-1 py-1 rounded-md ">
            <span className="font-bold bg-red-200 pt-1 "><BiSolidMoviePlay></BiSolidMoviePlay> </span><span> : {data.movie}</span>
             
          </h1>
          <div className=" bg-red-200  tems-center justify-center w-[50%] ml-[2%] rounded-md px-2 py-2">
            <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold">
            <span className="font-bold bg-red-200 "><MdEventSeat></MdEventSeat> </span>
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
              D2:{data.seats.D1}
            </h1>
          </div>

          <h1 className="  flex mx-1 my-1 text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center font-bold text-bold bg-red-200  rounded-md">
            <span className="font-bold "><BiTime></BiTime> </span>
            : {data.slot}{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default LastBooking;