import React from "react";
import Holderbook from "./Holderbook";
const Bookinglist = () => {
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
            <button className="bg-transparent border font-bold uppercase text-white focus:bg-white focus:text-black md:px-5 px-2 md:py-2 py-1 md:ml-5 rounded-md md:rounded-lg text-sm md:text-base ">
              by code
            </button>
            <button className="bg-transparent border font-bold uppercase text-white focus:bg-white focus:text-black md:px-5 px-2 md:py-2 py-1 ml-5 rounded-md md:rounded-lg text-sm md:text-base">
              by name
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 min-w-[484px]">
          <div className="grid grid-cols-5 my-3 text-gray-500 text-xs md:text-base">
            <div className="">booking code</div>
            <div className="">Purchase date</div>
            <div className="">Customer</div>
            <div className="">services</div>
            <div className="text-end">price</div>
          </div>

          <div className="w-full h-[1px] bg-zinc-700"></div>
          {/* id from maping api */}
          <Holderbook id="100" />
          <Holderbook id="40" />
          <Holderbook id="20" />
        </div>
      </section>
    </>
  );
};

export default Bookinglist;
