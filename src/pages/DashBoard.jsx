import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClone,
  faReceipt,
  faGear,
  faCircleQuestion,
  faBars,
  faCircleXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
const DashBoard = () => {
  const [show, setShow] = useState(false);
  const view = () => {
    setShow(true);
  };

  const getSidebarClass = () => {
    if (show) {
      return "absolute left-0 z-10 lg:static side-bar w-[240px] h-[100vh] bg-[#09090b] p-3 pt-10 lg:pt-3 text-white text-md font-bold flex flex-col items-start justify-start visible-class";
    } else {
      return "absolute -left-full z-10 lg:static side-bar w-[240px] h-[100vh] bg-[#09090b] p-3 text-white text-md font-bold flex flex-col items-start justify-start hidden-class";
    }
  };

  const navigate = useNavigate();

  const backToSite = () => {
    navigate("/");
  };

  return (
    <>
      <div className="relative container-fluid h-auto  bg-[#09090b] lg:pl-3 pl-0  flex justify-start">
        <section className={getSidebarClass()}>
          <section className="pt-8  w-full">
            <button
              onClick={() => {
                setShow(false);
              }}
              className="text-2xl absolute top-5 left-5 block lg:hidden "
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <MenuButton
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#18181b]
                px-3 py-2 text-md text-white shadow-sm ring-1 ring-inset ring-transparent font-bold"
                >
                  Dash account
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-[#18181b] shadow-lg  focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Account settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Support
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      License
                    </Link>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          </section>
          <div className="w-[80%] h-[1px] mt-8 mx-auto bg-zinc-700"></div>
          <section className="pt-5 w-full">
            <div className=" cursor-pointer p-4 hover:bg-[#18181b]  rounded-xl">
              <span className="icon m-3">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              Home
            </div>
            <div className=" cursor-pointer p-4 hover:bg-[#18181b]  rounded-xl">
              <span className="icon m-3">
                <FontAwesomeIcon icon={faClone} />
              </span>
              Event
            </div>
            <div className=" cursor-pointer p-4 hover:bg-[#18181b]  rounded-xl">
              <span className="icon m-3">
                <FontAwesomeIcon icon={faReceipt} />
              </span>
              Order
            </div>
            <div className="cursor-pointer p-4 hover:bg-[#18181b]  rounded-xl">
              <span className="icon m-3">
                <FontAwesomeIcon icon={faGear} />
              </span>
              Setting
            </div>
          </section>
          <section className="w-full mb-[30px] mt-auto">
            <div className=" cursor-pointer p-4 hover:bg-[#18181b]  rounded-xl ">
              <span className="icon m-3">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              Support
            </div>
            <div
              className=" cursor-pointer p-4 hover:bg-[#18181b]  rounded-xl "
              onClick={backToSite}
            >
              <span className="icon m-3">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              back to site
            </div>
          </section>
        </section>

        <section className=" bg-transparent h-[100vh] lg:w-[calc(100%-240px)] w-full p-2 overflow-auto ">
          <section className="relative  bg-[#18181b] w-full h-auto rounded-xl xl:px-44 py-20 px-10  text-white font-medium border border-neutral-800">
            <button
              onClick={view}
              className="absolute top-2 left-2 p-3 text-2xl block lg:hidden"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <h1 className="text-xl">Good afternoon, Erica</h1>
            <section className="py-10">
              <div className="filter flex justify-between">
                <p>Overview</p>
                <p>Overview</p>
                {/* adding the filter */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-10 xl:grid-cols-4 text-sm">
                <div className="total mt-5 min-w-[250px]">
                  <div className="w-full h-[1px] bg-zinc-700"></div>
                  <p className="mt-5 text-lg font-medium">Total revenue</p>
                  <div className="mt-5 text-2xl">$2.6M</div>
                  <div className="mt-5 text-gray-600 font-semibold">
                    <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                      +4.5%
                    </span>
                    from last week
                  </div>
                </div>
                <div className="total mt-5 min-w-[250px]">
                  <div className="w-full h-[1px] bg-zinc-700"></div>
                  <p className="mt-5 text-lg font-medium">Total revenue</p>
                  <div className="mt-5 text-2xl">$2.6M</div>
                  <div className="mt-5 text-gray-600 font-semibold">
                    <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                      +4.5%
                    </span>
                    from last week
                  </div>
                </div>
                <div className="total mt-5 min-w-[250px]">
                  <div className="w-full h-[1px] bg-zinc-700"></div>
                  <p className="mt-5 text-lg font-medium">Total revenue</p>
                  <div className="mt-5 text-2xl">$2.6M</div>
                  <div className="mt-5 text-gray-600 font-semibold">
                    <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                      +4.5%
                    </span>
                    from last week
                  </div>
                </div>
                <div className="total mt-5 min-w-[250px]">
                  <div className="w-full h-[1px] bg-zinc-700"></div>
                  <p className="mt-5 text-lg font-medium">Total revenue</p>
                  <div className="mt-5 text-2xl">$2.6M</div>
                  <div className="mt-5 text-gray-600 font-semibold">
                    <span className="mr-2 text-lime-300 bg-green-950 rounded-md p-1">
                      +4.5%
                    </span>
                    from last week
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default DashBoard;