import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Sign = () => {
  const [haveAc, sethaveAc] = useState(false);
  const log = (e) => {
    e.preventDefault();
    sethaveAc(true);
  };
  const create = (e) => {
    e.preventDefault();
    sethaveAc(false);
  };
  return (
    <>
      <Nav />
      <section className="container mx-auto py-10 md:my-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {haveAc ? "Login" : "Create an account"}
            </h2>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-gray-900 rounded-md shadow-my">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form action="#" method="POST">
                  <div className="space-y-5">
                    {haveAc ? (
                      ""
                    ) : (
                      <>
                        <div>
                          <label
                            for=""
                            className="text-base font-medium text-gray-200"
                          >
                            First & Last name
                          </label>
                          <div className="mt-2.5 relative focus-within:text-gray-400 text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>

                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Enter your full name"
                              className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200   rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 bg-gray-800 outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            for=""
                            className="text-base font-medium text-gray-200"
                          >
                            Email address
                          </label>
                          <div className="mt-2.5 relative focus-within:text-gray-400 text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                              </svg>
                            </div>

                            <input
                              type="email"
                              name=""
                              id=""
                              placeholder="Enter email to get started"
                              className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 bg-gray-800  rounded-md focus:outline-none outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <label
                        htmlFor="username"
                        className="text-base font-medium text-gray-200"
                      >
                        Username
                      </label>
                      <div className="mt-2.5 relative focus-within:text-gray-400 text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5.121 17.804A8.956 8.956 0 003 12C3 6.477 7.477 2 13 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 01-4.004-.806l-.143-.09a1 1 0 00-.996-.003 9.956 9.956 0 01-2.737 1.703zM16.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Enter your username"
                          className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 bg-gray-800 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" className="text-base font-medium text-gray-200">
                        Password
                      </label>
                      <div className="mt-2.5 relative focus-within:text-gray-400 text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 bg-gray-800  rounded-md focus:outline-none outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    {haveAc ? (
                      ""
                    ) : (
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree"
                          className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded"
                        />

                        <label
                          for="agree"
                          className="ml-3 text-sm font-medium text-gray-500"
                        >
                          I agree to Postcraft’s
                          <Link
                            href="#"
                            title=""
                            className="text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            Terms of Service
                          </Link>
                          and
                          <Link
                            href="#"
                            title=""
                            className="text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                    )}
                    <div className="flex justify-center items-center">

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center md:w-[50%] w-[80%] md:px-4 px-2 md:py-4 py-2 text-base  text-white transition-all duration-200 bg-cyan-800 uppercase font-bold rounded-md outline-none focus:outline-none"
                        onClick={(e)=>{ e.preventDefault() }}
                      >
                        {(haveAc)?("login"):("create account")}

                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        {haveAc
                          ? "create an account"
                          : "Already have an account?"}
                        <Link
                          href="#"
                          title=""
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                          onClick={(haveAc)?create:log}
                        >
                        {(haveAc)?("Create"):("Login")}

                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sign;
