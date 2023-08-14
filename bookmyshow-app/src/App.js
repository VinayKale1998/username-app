import React, { useState } from "react";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import TimeSlot from "./Components/TimeSlot";
import Seats from "./Components/Seats";
import Button from "./UI/Button";
import { useSelector, useDispatch } from "react-redux";
import LastBooking from "./Components/LastBooking";
import { movieActions } from "./Store";
import { slotActions } from "./Store";
import { seatActions } from "./Store";
import ErrorModal from "./UI/ErrorModal";
import ConfirmationModal from "./UI/ConfirmationModal";
import { PiPopcornBold } from "react-icons/pi";

// import axios from "axios";

function App() {
  const movies = useSelector((state) => state.movies);
  const seats = useSelector((state) => state.seats);
  const slots = useSelector((state) => state.slots);
  const [errorState, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const dispatch = useDispatch();

  const URL = "http://localhost:8080/api/booking";

  const submitHanlder = async (event) => {
    event.preventDefault();
    if (
      movies.value &&
      slots.value &&
      (seats.value["A1"] != 0 ||
        seats.value["A2"] != 0 ||
        seats.value["A3"] != 0 ||
        seats.value["A4"] != 0 ||
        seats.value["D1"] != 0 ||
        seats.value["D2"] != 0)
    ) {
      console.log("ready to send a request");
      setConfirm(true);
      let timer = setTimeout(async () => {
        setConfirm(null);
      }, 20000);
    } else {
      if (movies.value == null) {
        setError("Please Select a Movie!");
      } else if (slots.value == null) {
        setError("Please select a slot! ");
        console.log(seats.value);
      } else if (true) {
        console.log("Inside the else if for seats");
        var count = 0;
        // for(const val of seats.value)
        // {
        //  count= val>0?count+1:count;
        // }
        // console.log("count",count)
        if (count == 0) {
          setError("Please select a Seat!");
        }
      }
    }
  };

  const dismissHandler = () => {
    setError(null);
  };

  const confirmHandler = async (event) => {
    console.log("in confirm");
    const bookingInfo = {
      movie: movies.value,
      seats: seats.value,
      slot: slots.value,
    };
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(bookingInfo),
      });
      console.log(response.status);
      localStorage.clear();

      dispatch(movieActions.clearValue());
      dispatch(slotActions.clearValue());
      dispatch(seatActions.clearValue());
    } catch (err) {
      console.log(err);
    }

    setConfirm(null);
  };

  const cancelHandler = (event) => {
    console.log("in cancel");
    setConfirm(null);
  };

  return (
    <div>
      {errorState && (
        <ErrorModal
          title="Booking Details Incomplete"
          message={errorState}
          onDismiss={dismissHandler}
        >
          {" "}
        </ErrorModal>
      )}
      {confirm && (
        <ConfirmationModal
          title="Confirm to proceed"
          message={{ movie: movies.value, slot: slots.value }}
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        >
          {" "}
        </ConfirmationModal>
      )}
      <Header></Header>
      <section className="mx-[0.1%]  md:mt-[4vh]  sm:mt-[3vh]  mt-2vh py-[5px] pl-[2vh]  justify-center md:justify-start text-sm transition-all sm:text-md md:text-lg lg:text-2xl xl:text-3xl font-bold md:h-[10vh] h-8vh flex items-center">
        Grab Your Popcorns &nbsp;<PiPopcornBold></PiPopcornBold>{" "}
      </section>
      <main className="body flex  flex-row justify-center md:justify-start  ">
        <section className="booking-pane w-full lg:w-[80%] flex  flex-col ">
          <section className=" flex  flex-row  items-center justify-center md:justify-normal   mx-2 my-2  py-2 movie-row  sm:border sm:border-1 rounded-sm sm:border-gray-900">
            <Movies></Movies>
          </section>

          <section className=" flex  items-center  mx-2 my-4  py-2 timeslot-row  border border-1 rounded-sm border-gray-700">
            <TimeSlot></TimeSlot>
          </section>

          <section className=" flex items-center  mx-2 my-4 py-2 seats-row  border border-1 rounded-sm border-gray-700">
            <Seats></Seats>
          </section>
          <section className=" flex flex-row items-center justify-center w-[100%] h-auto  mx-2  my-2   px-1 py-1  ">
            <Button
              className="  hover:scale-110  w-[18%] text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl  px-1 py-1 border border-1   rounded-sm cursor-pointer text-white bg-gradient-to-r from-yellow-600 to-red-600 "
              onClick={submitHanlder}
            >
              Create Booking
            </Button>
          </section>

          <section className=" lastbooking flex flex-row  items-center justify-center w-[100%]  lg:hidden h-auto   mx-2  my-2   px-1 py-1  ">
            <LastBooking className="lastbooking w-[40%] sm:w-[35%] bg-gradient-to-r from-rose-400 to-orange-300 px-1 py-2 transition-all"></LastBooking>
          </section>
        </section>

        <section className="  hidden lg:block   mx-2  my-2   px-1 py-1 lastbooking w-[18%] bg-gradient-to-r from-rose-400 to-orange-300 border border-1 ">
          <LastBooking className=" "></LastBooking>
        </section>
      </main>
    </div>
  );
}

export default App;
