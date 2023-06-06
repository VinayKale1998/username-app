import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";

import PreviewImage from "../Components/PreviewImage";
import DownloadModal from "../Components/DownloadModal";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
  {
    width: 1800,
    itemsToShow: 3,
  },
  //  { width:1, itemsToShow:1},
  //  { width:1, itemsToShow:1},
];

function FlashCardDetails() {
  const params = useParams();
  const index = params.index;

  const decks = useSelector((state) => state.deck);

  const itemNos = decks[index].Terms.length;

  const [currentTerm, setTerm] = useState(0);
  const carouselRef = useRef();

  const [modal, setModal] = React.useState(false);

  // useEffect(() => {
  //   console.log(decks[index].Terms[currentTerm].image);
  // }, [currentTerm]);

  const leftScroll = () => {
    const width = carouselRef.current.clientWidth;
    console.log(width);

    //  carousel.scrollLeft = carousel.scrollLeft-width;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - width;
    setTerm((prevterm) => {
      if (prevterm === 0) {
        return prevterm;
      } else {
        return prevterm - 1;
      }
    });
  };
  const rigthScroll = () => {
    setTerm((prevterm) => {
      return prevterm + 1;
    });

    // let carousel= document.querySelector('.carousel')
    const width = carouselRef.current.clientWidth;
    console.log(width);
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + width;
  };

  const cardsScroll = (index) => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft;
  };

  const modalHandler=()=>{
    setModal(prevModal =>!prevModal)
  }

  // carousel.scrollLeft = carousel.scrollLeft+width;

  return (
    <div className=" flashcard mt-0 mb-96">
      <section className="group-desc bg-red-100 my-2 h-18 mx-2 flex flex-col">
        <div className="Group Name font-bold text-2xl static h-10 flex py-2 px-2">
          <Link to=".." relative="path" className="my-1">
            <BiArrowBack size={30}></BiArrowBack>
          </Link>
          {decks[index].Group}
        </div>

        <div className="Group Name  bg-red-50 h-14 mx-10 pl-4 overflow-hidden">
          {decks[index].Description}
        </div>
      </section>

      <section className="Deck display flex flex-row my-2 mx-2 min-h-[50%] ">
        {/* flashcards list */}
        <div className="flashcards bg-red-100 w-56 px-1 py-1 flex flex-col items-center space-y-2">
          <h1 className="4 mb-2 text-purple-800 mt-2 text-2xl font-bold">
            {" "}
            FlashCards
          </h1>
          {decks[index].Terms.map((item, index) => (
            <button
              key={index}
              type="button"
              className=" my-1 ml-2 w-32 border border-purple-800"
              name={item.term}
              onClick={() => {
                setTerm(index);
                const width = carouselRef.current.clientWidth;
                console.log(width);
                carouselRef.current.scrollLeft = width * index;
              }}
            >
              {item.Term}
            </button>
          ))}
        </div>
        {/* termExpansion */}
        <div className=" relative carousel w-[65%] max-w-[100%]  bg-red-300  ml-5 px- py-2 h-96  overflow-hidden flex  scroll-smooth">
          <button
            className="leftScroll absolute lef-1  h-[100%] flex flex-col justify-center "
            onClick={leftScroll}
            disabled={currentTerm == 0 && true}
          >
            <span className="text-3xl  opacity-40 w-5 h-10 flex flex-col justify-center items-center rounded-md pb-2 bg-gray-200">
              &lt;
            </span>
          </button>

          <button
            className="rightScroll absolute  left-[97%] h-[100%] g-red-600 flex flex-col justify-center   "
            onClick={rigthScroll}
            disabled={currentTerm === itemNos - 1}
          >
            <span className="text-3xl opacity-40  w-5 h-10  flex flex-col justify-center  rounded-md pb-2  bg-gray-200">
              &gt;
            </span>
          </button>
          <div
            className=" container relative flex overflow-hidden scroll-smooth w-[112%] bg-red-400 ml-6 mr-8"
            ref={carouselRef}
          >
            {decks[index].Terms.map((item, index) => (
              <div
                className=" relative
                min-w-[100%]  min-h-[100%] flex flex-row bg-red-100  "
                key={index}
              >
                <div className=" relative w-[65%] left-1 top-1 min-w-[70%] max-w-[65%] max-h-[97%] px-1">
                  <PreviewImage
                    className="max-w-[100%]  w-74  max-h[100%] pt-1"
                    file={item.image}
                  ></PreviewImage>
                </div>
                {/* <div className="definition  relative text-1xl   right-[-4%] w-[30%]  max-h-[97%]   mx-1  px-2 py-10">
                  {item.definition}
                </div> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-red-50 ml-4 w-[14%] space-y-4 pt-4 items-center ">
          {modal && <DownloadModal onClick={modalHandler}></DownloadModal>}
          <button
            className="bg-red-700 w-[75%] flex  text-lg"
            onClick={modalHandler}
          >
            <span>Share</span>
          </button>
          <button className="bg-red-700 w-[75%] flex text-lg">
            <span></span>
            <span>Download</span>
          </button>
          <button className="bg-red-700 w-[75%] flex text-lg">
            <span></span>
            <span>Share</span>
          </button>
        </div>
      </section>
      <div className="absolute left-[47%]">
        <span>{`${currentTerm + 1}/${itemNos}`}</span>
      </div>
    </div>
  );
}

export default FlashCardDetails;
