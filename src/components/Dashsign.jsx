import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Dashsign = () => {
  const { setdashsign } = useAuth();

  const login = (e) => {
    e.preventDefault();
    setdashsign(true);
  };

  const navigate = useNavigate();

  const backToSite = () => {
    navigate("/");
  };


  return (
    <>
      <div className="relative container-fluid w-full min-h-[100vh] bg-[#09090b] text-white flex justify-center items-center p-5">
        <div className="font-bold bg-[rgb(24,24,27)] md:px-20 px-5 py-10 border border-neutral-800 flex flex-col justify-start items-center rounded-3xl">
          <h1 className="md:text-3xl text-xl uppercase my-5">login</h1>
          <p className="md:text-xl text-md my-4 font-light text-neutral-500">
            login to open the admin dashboard
          </p>
          <form className=" w-full flex flex-col justify-start items-center ">
            <input
              type="text"
              placeholder="Enter username"
              className=" my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600"
            />
            <input
              type="password"
              placeholder="Enter password"
              className=" my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600"
            />
            <div className="text-center">
              <p className="text-base text-gray-600">
                Forget Password
                <Link
                  href="#"
                  title=""
                  className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                >
                  Get password?
                </Link>
              </p>
            </div>
            <button
              className="md:px-5 px-3  py-1 mt-5 bg-neutral-800 rounded-lg border border-neutral-600 text-sm"
              onClick={login}
            >
              login
            </button>
          </form>
          <button
            className="mt-5 uppercase text-orange-500 underline"
            onClick={backToSite}
          >
            <span className="icon m-3 text-white">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            back to website
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashsign;
