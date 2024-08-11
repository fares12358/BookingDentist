import React from "react";
import { useAuth } from "./AuthContext";
const BookConfirme = () => {
  const { data } = useAuth();
  const { setConfirmed } = useAuth();
  const { setVconfirm } = useAuth();

  const confirmData = (e) => {
    e.preventDefault();
    setConfirmed(true);
    setVconfirm(false);
  };

  return (
    <>
      <section className="bookConfirm text-center shadow-my flex flex-col justify-start items-center p-0 md:p-5 min-h-64 md:w-[80%] w-[100%] text-white  ">
        <h1 className="text-xl font-bold uppercase mb-4">confirm booking</h1>
        <div className="grid grid-cols-2 border w-80 text-2xl font-bold ">
          <div className="px-2 py-1 text-start border">name :</div>
          <div className="px-2 py-1 text-start text-md font-semibold text-gray-400 border">
            {data.name}
          </div>
          <div className="px-2 py-1 text-start border">code :</div>
          <div className="px-2 py-1 text-start text-md font-semibold text-gray-400 border">
            {data.code}
          </div>
          <div className="px-2 py-1 text-start border">phone :</div>
          <div className="px-2 py-1 text-start text-md font-semibold text-gray-400 border">
            {data.phone}
          </div>
          <div className="px-2 py-1 text-start border">services :</div>
          <div className="px-2 py-1 text-start text-md font-semibold text-gray-400 border">
            {data.services}
          </div>
          <div className="px-2 py-1 text-start border">day :</div>
          <div className="px-2 py-1 text-start text-md font-semibold text-gray-400 border">
            {data.day}
          </div>
          <div className="px-2 py-1 text-start border">time :</div>
          <div className="px-2 py-1 text-start text-md font-semibold text-gray-400 border">
            {data.time}
          </div>
          <div className="px-2 py-1 text-start border">price :</div>
          <div className="px-2 py-1 text-start border"></div>
        </div>
        <button
          className="send bg-cyan-800 text-white px-5 py-3 mx-auto rounded-lg mt-10 font-bold uppercase"
          onClick={confirmData}
        >
          confirm
        </button>
      </section>
    </>
  );
};

export default BookConfirme;
