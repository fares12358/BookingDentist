import React from "react";
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
  const { setdahpage } = useAuth();
  
  const id =props.id;
  return (
    <>
      <section className="w-full py-5">
        <button className="text-neutral-500"
          onClick={() => {
            setdahpage(<Bookinglist />);
          }}>
          <span className="px-3 text-white">
            <FontAwesomeIcon icon={faCaretLeft} />
          </span>
          booking{id}
        </button>

        <h1 className="py-10 text-md md:text-xl font-bold">
          Booking #3000{" "}
          <span className="status text-[10px] md:text-[12px] mx-3 bg text-lime-300 bg-green-950 px-2 py-1 rounded-md">
            Successful
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 md:gap-0 ">
            <div className="price ">
              <FontAwesomeIcon icon={faWallet} />
              <span className="pl-2">US$80.00</span>
            </div>
            <div className="services">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="pl-2">clean</span>
            </div>
            <div className="date ">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="pl-2">May 9, 2024</span>
            </div>
          </div>
          <div className="control  flex md:justify-end justify-start mt-5 md:mt-0 items-center">
            <button className="accept px-5 py-1  text-lime-300 bg-green-950 rounded-md">
              Accept
            </button>
            <button className="refund px-5 py-1 ml-5 text-[#f472b6] bg-[#2f222b] rounded-md">
              Refund
            </button>
          </div>
        </div>
        <p className="py-5 text-md">Summary</p>
        <div className="bg-zinc-700 w-full h-[1px] my-5"></div>
        <div className="= flex flex-col ">
          <div className="title flex flex-col text-neutral-500 font-semibold   ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Customer</span>
              <span className="text-white">fares</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>code</span>
              <span className="text-white">2020</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Services</span>
              <span className="text-white">clean</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>Price</span>
              <span className="text-white">200.LE</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>date</span>
              <span className="text-white">May 9, 2024</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>day</span>
              <span className="text-white">Monday</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>email</span>
              <span className="text-white">fm01124711424@gamil.com</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-0">
              <span>phone</span>
              <span className="text-white">01124711424</span>
            </div>
            <div className="bg-zinc-700 w-full h-[1px] my-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Viewbook;
