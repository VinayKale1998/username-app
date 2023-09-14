import React, { useEffect, useState } from "react";
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
import BookingConfirmModal from "./UI/BookingConfirmModal";
import { URL } from "./Store/data";

function App() {
  // gethering states from redux
  const movies = useSelector((state) => state.movies);
  const seats = useSelector((state) => state.seats);
  const slots = useSelector((state) => state.slots);
  //initalizing states for errorr and confirmation popups
  const [errorState, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [bookingConfirm, setBookingConfirm] = useState(null);

  const [lastBooking, setLastBooking] = useState(null);
  
  const dispatch = useDispatch();

  //submitHandler for final booking confirmation //
  //checking if all the required fields are present, else setting an error
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
      } else if (
        seats.value["A1"] == 0 &&
        seats.value["A2"] == 0 &&
        seats.value["A3"] == 0 &&
        seats.value["A4"] == 0 &&
        seats.value["D1"] == 0 &&
        seats.value["D2"] == 0
      ) {
        setError("Please select a Seat!");
      }
    }
  };

  //confirm handler to process the confirm button after uses clicks on confirm booking
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

      if (response.status == 200) {
        setBookingConfirm(true);
        setLastBooking({
          movie: movies.value,
          seats: seats.value,
          slot: slots.value,
        });
      }
      {
        localStorage.clear();

        dispatch(movieActions.clearValue());
        dispatch(slotActions.clearValue());
        dispatch(seatActions.clearValue());
      }

      if (response.status == 404) setBookingConfirm(false);
    } catch (err) {
      console.log(err);
    }

    setConfirm(null);
  };

  //cancelhandler to handle to cancel button while in the ConfirmationModal modal
  const cancelHandler = (event) => {
    setConfirm(null);
  };

  ///dismisshandler to handle the cancel button for error message
  const dismissHandler = () => {
    setError(null);
  };

  //use Effect to listen to changes in bookingConfirm state and collapse the  BookingConfirmModal modal
  useEffect(() => {
    setTimeout(() => {
      if (bookingConfirm == false || bookingConfirm == true) {
        setBookingConfirm(null);
      }
    }, 2000);
  }, [bookingConfirm]);

  return (
    <div className="app">
      {/* modal for error display */}
      {errorState && (
        <ErrorModal
          title="Booking Details Incomplete"
          message={errorState}
          onDismiss={dismissHandler}
        >
          {" "}
        </ErrorModal>
      )}
      {/* modal for user confirmation   */}
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

      {/* modal for booking confirmation display */}
      {bookingConfirm == true && (
        <BookingConfirmModal
          title="Booking Confirmed !!!"
          message="Enjoy your movie"
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        >
          {" "}
        </BookingConfirmModal>
      )}

      {/* header for the page */}
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

        {lastBooking == null && (
          <section className="lastBooking  hidden lg:block   mx-2  my-2   px-1 py-1 lastbooking w-[18%] bg-gradient-to-r from-rose-400 to-orange-300 border border-1 ">
            <LastBooking className="lastBooking " data={null}></LastBooking>
          </section>
        )}

        {lastBooking != null && (
          <section className="lastBooking  hidden lg:block   mx-2  my-2   px-1 py-1 lastbooking w-[18%] bg-gradient-to-r from-rose-400 to-orange-300 border border-1 ">
            <LastBooking
              className="lastBooking "
              data={lastBooking}
            ></LastBooking>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
