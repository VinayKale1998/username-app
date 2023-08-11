import React from "react";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import TimeSlot from "./Components/TimeSlot";
import Seats from "./Components/Seats";

function App() {

  

  return (
    <div>
      <Header></Header>
      <main className="body flex">

        <section className="booking-pane ">

          <section className=" mx-2 my-2 movie-row  border placeholder:border-1 border-gray-700">
            <Movies></Movies>
          </section>

          <section className="  mx-2 my-2 timeslot-row  border border-1 border-gray-700">
            <TimeSlot></TimeSlot>
          </section>

          <section className="  mx-2 my-2 seats-row  border border-1 border-gray-700">
            <Seats></Seats>
          </section>

        </section>

        <section className=" mx-2 my-2  px-1 py-1 lastbooking border border-1 border-gray-700">
          <div>last booking display div</div>
        </section>
      </main>
    </div>
  );
}

export default App;
