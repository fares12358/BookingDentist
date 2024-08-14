import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faWallet,
  faPenToSquare,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./AuthContext";
import Bookinglist from "./Bookinglist";

const Viewbook = (props) => {
  const { setdahpage, dataForBooking } = useAuth();
  const [data, setdata] = useState({});

  useEffect(() => {
    // Find the booking that matches the given id from props
    if (dataForBooking) {
      const booking = dataForBooking.find((item) => item.id === props.id);
      if (booking) {
        setdata(booking);
      }
    }
  }, [dataForBooking, props.id]);


  return (
    <>
      <section className="w-full py-5">
        <button
          className="text-neutral-500"
          onClick={() => {
            setdahpage(<Bookinglist />);
          }}
        >
          <span className="px-3 text-white">
            <FontAwesomeIcon icon={faCaretLeft} />
          </span>
          Booking list
        </button>

        <h1 className="py-10 text-md md:text-xl font-bold">
          Booking #{data.code}
          <span className="status text-[10px] md:text-[12px] mx-3 bg text-lime-300 bg-green-950 px-2 py-1 rounded-md">
            Successful
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 md:gap-0 ">
            <div className="price">
              <FontAwesomeIcon icon={faWallet} />
              <span className="pl-2">US$80.00</span>
            </div>
            <div className="services">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="pl-2">{data.services}</span>
            </div>
            <div className="date">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="pl-2">
                {data.day}-{data.time}
              </span>
            </div>
          </div>
          <div className="control flex md:justify-end justify-start mt-5 md:mt-0 items-center">
            <button className="accept px-5 py-1 text-lime-300 bg-green-950 rounded-md">
              Accept
            </button>
            <button className="refund px-5 py-1 ml-5 text-[#f472b6] bg-[#2f222b] rounded-md">
              Refund
            </button>
          </div>
        </div>

        <p className="py-5 text-md">Summary</p>
        <div className="bg-zinc-700 w-full h-[1px] my-5"></div>
        <div className="flex flex-col">
          <div className="title flex flex-col text-neutral-500 font-semibold">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Customer</span>
              <span className="text-white">{data.name}</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Code</span>
              <span className="text-white">{data.code}</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Services</span>
              <span className="text-white">{data.services}</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Price</span>
              <span className="text-white">200.LE</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Time</span>
              <span className="text-white">{data.time}</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Day</span>
              <span className="text-white">{data.day}</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Phone</span>
              <span className="text-white">{data.phone}</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Viewbook;
