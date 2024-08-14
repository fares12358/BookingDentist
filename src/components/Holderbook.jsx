import React from "react";
import { useAuth } from "../components/AuthContext";
import Viewbook from "./Viewbook";

const Holderbook = (props) => {
  const { setdahpage } = useAuth();

  return (
    <>
      <div
        className="grid grid-cols-5 py-5 text-xs md:text-base hover:bg-[#242427]"
        onClick={() => {setdahpage(<Viewbook id={props.id} />) }}
      >
        <div>{props.code}</div>
        <div className="text-zinc-600">{props.time}-{props.day}</div>
        <div>{props.name}</div>
        <div>{props.services}</div>
        <div className="text-end">L.E 80.00</div>
      </div>

      <div className="w-full h-[1px] bg-zinc-700"></div>
    </>
  );
};

export default Holderbook;
