import React, { useEffect, useState } from "react";
import { seats } from "../Store/data";
import { useSelector } from "react-redux";

function LastBooking() {
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
    <div>
      {data.movie == null && (
        <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
          No Previous booking found
        </h1>
      )}

      {data.seats != null && (
        <div>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            <span className="font-bold ">Movie : </span>
            {data.movie}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            <span className="font-bold ">seats : </span>
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            A1:{data.seats.A1}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            A2:{data.seats.A2}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            A3:{data.seats.A3}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            A4:{data.seats.A4}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            D1:{data.seats.D1}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            D2:{data.seats.D1}
          </h1>
          <h1 className="text-xs transition-all sm:text-xs md:text-sm lg:text-md xl:text-lg items-center">
            <span className="font-bold ">Slot : </span>
            {data.slot}{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default LastBooking;
