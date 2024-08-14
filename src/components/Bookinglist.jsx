import React, { useState, useEffect } from "react";
import Holderbook from "./Holderbook";
import { useAuth } from "./AuthContext";
const Bookinglist = () => {
  const { dataForBooking } = useAuth();
  const { setDataForBooking } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/booking"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDataForBooking(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full overflow-auto">
        <p className="py-5">Recent booking</p>
        <div className="search-bar  flex justify-start items-start md:items-center flex-col md:flex-row">
          <input
            type="text"
            className="bg-transparent border border-gray-500 outline-none focus:outline-none placeholder:text-[] px-3 md:px-5 py-1 md:py-2 rounded-xl text-sm md:text-md"
            placeholder="search order"
          />
          <div className="filter my-5 ">
            <button className="bg-transparent border font-bold uppercase text-white focus:bg-white focus:text-black px-4 py-1 md:ml-5 rounded-md md:rounded-lg text-sm ">
              by code
            </button>
            <button className="bg-transparent border font-bold uppercase text-white focus:bg-white focus:text-black px-4 py-1 ml-5 rounded-md md:rounded-lg text-sm">
              by name
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 min-w-[484px]">
          <div className="grid grid-cols-5 my-3 text-gray-500 text-xs md:text-base">
            <div className="">Booking code</div>
            <div className="">Purchase date</div>
            <div className="">Customer</div>
            <div className="">Services</div>
            <div className="text-end">Price</div>
          </div>
          <div className="w-full h-[1px] bg-zinc-700"></div>
          {/* Rendering data from the API */}
          {dataForBooking.length > 0
            ? dataForBooking.map((ele) => (
                <Holderbook
                  key={ele.id} // Add a key prop for better list rendering
                  id={ele.id}
                  name={ele.name}
                  code={ele.code}
                  services={ele.services}
                  time={ele.time}
                  day={ele.day}
                />
              ))
            : "loading data or No data exist server error"}
        </div>
      </section>
    </>
  );
};

export default Bookinglist;
