import {
  // Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Dashboard", href: "/DashBoard", current: false },
    { name: "About", href: "/About", current: false },
    { name: "Services", href: "/Services", current: false },
    { name: "Contact", href: "/Contact", current: false },
  ];

  //view and hide profile and sign in
  const [isloged, setloged] = useState(false);

  const sign = () => {
    setloged(true);
  };

  const logOut = () => {
    setloged(false);
  };

  return (
    <Disclosure as="nav" className="bg-gray-900 py-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* icon nav bar */}
              <img
                alt="Your Company"
                src={require("../images/Untitled (2).png")}
                className="md:h-10 h-8 w-auto border border-white rounded-50"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-700 text-white text-lg"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-1  font-medium text-lg"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {isloged ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full  text-sm focus:outline-none ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <FontAwesomeIcon
                      className="md:text-2xl text-xl "
                      icon={faUser}
                      color="white "
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-white hover:bg-gray-900"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-white hover:bg-gray-900"
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-white hover:bg-gray-900"
                      onClick={logOut}
                    >
                      Sign out
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          ) : (
            // ////////////////////////////////////////////////////////////////////////////////////////////
            <Link
              className="absolute right-0 md:static bg-cyan-800 md:text-lg text-sm px-3 py-2 rounded-lg font-bold text-white uppercase  "
              onClick={sign}
              to="/Sign"
            >
              sign up
            </Link>
          )}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
export default Nav;

// const [userMood,setUserMood]=useState(false);

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   ...(userMood ? [{ name: "Dashboard", href: "/DashBoard", current: false }] : []),
//   { name: "About", href: "/About", current: false },
//   { name: "Contact", href: "/Contact", current: false },
// ];
