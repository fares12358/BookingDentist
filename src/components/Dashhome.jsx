import React, { useState } from "react";
import Bookinglist from "./Bookinglist";
const Dashhome = () => {
  // use context fro view

  return (
    <>
    
      <h1 className="text-xl">Good afternoon, Erica</h1>

      <section className="py-10">
        <div className="filter flex justify-between text-sm">
          <p>Overview</p>
          <p>Overview</p>
          {/* adding the filter */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 xl:grid-cols-4 text-sm">
          <div className="total mt-5 min-w-[250px]">
            <div className="w-full h-[1px] bg-zinc-700"></div>
            <p className="mt-5 text-md font-medium">Total revenue</p>
            <div className="mt-3 text-2xl">$2.6M</div>
            <div className="mt-3 text-gray-600 font-semibold">
              <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                +4.5%
              </span>
              from last week
            </div>
          </div>

          <div className="total mt-5 min-w-[250px]">
            <div className="w-full h-[1px] bg-zinc-700"></div>
            <p className="mt-5 text-md font-medium">Average order value</p>
            <div className="mt-3 text-2xl">$455</div>
            <div className="mt-3 text-gray-600 font-semibold">
              <span className="mr-2 text-[#f472b6] bg-[#2f222b] rounded-md p-1">
                -4.5%
              </span>
              from last week
            </div>
          </div>

          <div className="total mt-5 min-w-[250px]">
            <div className="w-full h-[1px] bg-zinc-700"></div>
            <p className="mt-5 text-md font-medium">Tickets sold</p>
            <div className="mt-3 text-2xl">5,888</div>
            <div className="mt-3 text-gray-600 font-semibold">
              <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                +4.5%
              </span>
              from last week
            </div>
          </div>

          <div className="total mt-5 min-w-[250px]">
            <div className="w-full h-[1px] bg-zinc-700"></div>
            <p className="mt-5 text-md font-medium">Pageviews</p>
            <div className="mt-3 text-2xl">823,067</div>
            <div className="mt-3 text-gray-600 font-semibold">
              <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                +21.2%
              </span>
              from last week
            </div>
          </div>
        </div>
      </section>
      <Bookinglist />
    </>
  );
};

export default Dashhome;
