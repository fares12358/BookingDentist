import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useAuth } from "../components/AuthContext";
const Sign = () => {
  const [haveAc, setHaveAc] = useState(true);
  const [getPassMood, setGetPassMood] = useState(false);
  const [isCreated, setIsCreate] = useState("");
  const { setUser } = useAuth();
  const { setloged } = useAuth();
  const { setdmin } = useAuth();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const log = (e) => {
    e.preventDefault();
    setHaveAc(true);
    setErUser("");
    setErPass("");
  };
  const create = (e) => {
    e.preventDefault();
    setHaveAc(false);
    setErUser("");
    setErPass("");
    setErName("");
    setErEmail("");
    setErCheck("");
  };

  const name = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  // set error in label inputs
  const [erName, setErName] = useState("");
  const [erPass, setErPass] = useState("");
  const [erEmail, setErEmail] = useState("");
  const [erUser, setErUser] = useState("");
  const [ercheck, setErCheck] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setErCheck("");
  };

  /////////////////////////////////////////// check name validation/////////////////////////////////////
  const validName = () => {
    // Reset error message
    setErName("");

    // Get the name value
    const nameValue = name.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof nameValue !== "string" || nameValue.length === 0) {
      setErName("Name cannot be empty");
      return false;
    }

    // Split the name by spaces to handle multiple words
    const words = nameValue.split(" ");

    // Check each word
    for (const word of words) {
      // Ensure the word is not empty (this avoids multiple consecutive spaces)
      if (word.length === 0) {
        setErName("Name contains invalid spacing");
        return false;
      }

      // Check if all characters in the word are letters
      for (let i = 0; i < word.length; i++) {
        if (!/[a-zA-Z]/.test(word[i])) {
          setErName(
            "All inputs must be letters, not numbers or special characters"
          );
          return false;
        }
      }
    }

    // If all checks pass, the name is valid
    return true;
  };
  /////////////////////////////////////////// check email validation/////////////////////////////////////
  const emailValid = () => {
    setErEmail("");

    // Get the name value
    const emailValue = email.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof emailValue !== "string" || emailValue.length === 0) {
      setErEmail("email cannot be empty");
      return false;
    }

    // Split the name by spaces to handle multiple words
    const words = emailValue.split(" ");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression

    if (!regex.test(words)) {
      setErEmail("Invalid email address.");
      return false;
    }

    return true;
  };
  /////////////////////////////////////////// check username validation/////////////////////////////////////
  const usernameValid = async () => {
    // Reset error message
    setErUser("");

    // Get the name value
    const userValue = username.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof userValue !== "string" || userValue.length === 0) {
      setErUser("username cannot be empty");
      return false;
    }

    // Split the name by spaces to handle multiple words

    if (!haveAc) {
      try {
        const response = await fetch("https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Check if the username already exists in the database
        const userExists = data.some((user) => user.username === userValue);

        if (userExists) {
          setErUser("Username already exists");
          return false;
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
        return false;
      }
    }

    return true;
  };
  /////////////////////////////////////////// check password validation/////////////////////////////////////
  const passwordValid = () => {
    // Reset error message
    setErPass("");

    // Get the name value
    const passValue = password.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof passValue !== "string" || passValue.length === 0) {
      setErPass("password cannot be empty");
      return false;
    }

    if (!haveAc) {
      if (passValue.length < 10) {
        setErPass("password cannot be less then 10 letters");
        return false;
      }

      const hasLetter = /[a-zA-Z]/;
      if (hasLetter.test(passValue)) {
        return true;
      } else {
        setErPass("Password must contain at least one letter.");
        return false;
      }
    }

    return true;
  };
  /////////////////////////////////////////// end check validation/////////////////////////////////////

  const clearInputs = () => {
    name.current.value = "";
    email.current.value = "";
    username.current.value = "";
    password.current.value = "";
    setIsChecked(false);
  };

  function post(data) {
    fetch("https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsCreate(`Account created successfully!`);
        clearInputs(); // Clear input fields after successful post
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setIsCreate("");
    }, 5000);
  }, [isCreated]);

  const submit = async (e) => {
    e.preventDefault();

    if (haveAc) {
      // Log in
      const isValidUsername = usernameValid();
      const isValidPassword = passwordValid();
      if (
        isValidUsername &&
        isValidPassword &&
        username.current.value !== "" &&
        password.current.value !== ""
      ) {
        try {
          const response = await fetch("https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/users");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          const user = data.find(
            (user) =>
              user.username === username.current.value &&
              user.password === password.current.value
          );

          if (user) {
            setErUser("Logged in successfully!");
            setUser(user);
            setloged(true);
            navigate("/");
            setdmin(user.role);
            /////////////////////////////////////////////////////////////navigation/////////////////////////////////////////
          } else {
            setErUser("Invalid username or password");
          }
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }
      }
    } else {
      // Create account
      if (isChecked) {
        const isValidName = validName();
        const isValidEmail = emailValid();
        const isValidUsername = usernameValid();
        const isValidPassword = passwordValid();
        if (
          isValidName &&
          isValidEmail &&
          isValidUsername &&
          isValidPassword &&
          name.current.value !== "" &&
          email.current.value !== "" &&
          username.current.value !== "" &&
          password.current.value !== ""
        ) {
          const userData = {
            name: name.current.value,
            email: email.current.value,
            username: username.current.value,
            password: password.current.value,
            role: false,
          };
          post(userData);
        }
      } else {
        setErCheck("Please check the Privacy Policy");
      }
    }
  };
  //////////////////////////////////////////////////////////////////////get password ////////////////////////////////
  const getPass = () => {
    setGetPassMood(true);
  };
  const getUsername = useRef();

  const [erGetPass, seterGetPass] = useState("");

  const getPassValid = () => {
    seterGetPass("");
    setisfound("");
    // Get the name value
    const username = getUsername.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof username !== "string" || username.length === 0) {
      seterGetPass("username cannot be empty");
      return false;
    }
    return true;
  };
  const [isFound, setisfound] = useState("");

  const findPass = async (e) => {
    e.preventDefault();
    const checkVaild = getPassValid();
    if (checkVaild) {
      try {
        const response = await fetch("https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const user = data.find(
          (user) => user.username === getUsername.current.value
        );

        if (user) {
          setisfound(user.password);
          /////////////////////////////////////////////////////////////navigation/////////////////////////////////////////
        } else {
          seterGetPass("username doesn't exist");
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    } else {
      seterGetPass("invalid username");
    }
  };

  return (
    <>
      <Nav />
      <section className="container mx-auto py-10 md:my-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative md:max-w-[60%] max-w-[100%] mx-auto  ">
            <div className="overflow-hidden bg-gray-900 rounded-md shadow-my">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <div className="max-w-2xl mx-auto text-center my-10">
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {getPassMood
                      ? "Get Password"
                      : haveAc
                      ? "Login"
                      : "Create an account"}
                  </h2>
                </div>

                {/* ///////////////////////////////////// form validation /////////////////////////// */}
                <form action="#" method="POST">
                  {getPassMood ? (
                    <div className="space-y-5 flex flex-col">
                      <div>
                        <label
                          for="getUsername"
                          className={
                            erGetPass === ""
                              ? "text-base font-medium text-gray-200"
                              : "text-base font-medium text-red-700"
                          }
                        >
                          {erGetPass === "" ? "Username" : erGetPass}
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
                            name="getUsername"
                            id="getUsername"
                            ref={getUsername}
                            placeholder="Enter your username"
                            className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 bg-gray-800 outline-none"
                            onChange={getPassValid}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400">
                        {isFound === "" ? (
                          ""
                        ) : (
                          <>
                            Your Password is :
                            <span className="text-white px-2 font-bold text-[20px]">
                              {isFound}
                            </span>
                          </>
                        )}
                      </p>
                      <button
                        className="inline-flex items-center justify-center md:w-[40%] w-[80%] mx-auto md:py-3 py-2 text-base  text-white transition-all duration-200 bg-cyan-800 uppercase font-bold rounded-md outline-none focus:outline-none my-5"
                        onClick={findPass}
                      >
                        find password
                      </button>
                      <p className="text-base text-gray-600">
                        Did you find it ?
                        <Link
                          href="#"
                          title=""
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline ml-2"
                          onClick={() => {
                            setGetPassMood(false);
                          }}
                        >
                          login
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {haveAc ? (
                        ""
                      ) : (
                        <>
                          <p className="text-green-600 font-medium">
                            {isCreated}
                          </p>
                          <div>
                            <label
                              for="name"
                              className={
                                erName === ""
                                  ? "text-base font-medium text-gray-200"
                                  : "text-base font-medium text-red-700"
                              }
                            >
                              {erName === "" ? "First & Last name" : erName}
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
                                name="name"
                                id="name"
                                ref={name}
                                placeholder="Enter your full name"
                                className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200   rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 bg-gray-800 outline-none"
                                onChange={validName}
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              for="email"
                              className={
                                erEmail === ""
                                  ? "text-base font-medium text-gray-200"
                                  : "text-base font-medium text-red-700"
                              }
                            >
                              {erEmail === "" ? "Email address" : erEmail}
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
                                name="email"
                                id="email"
                                ref={email}
                                placeholder="Enter email to get started"
                                className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 bg-gray-800  rounded-md focus:outline-none outline-none focus:border-blue-600 caret-blue-600"
                                onChange={emailValid}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div>
                        <label
                          for="username"
                          className={
                            erUser === ""
                              ? "text-base font-medium text-gray-200"
                              : "text-base font-medium text-red-700"
                          }
                        >
                          {erUser === "" ? "Username" : erUser}
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
                            name="username"
                            id="username"
                            ref={username}
                            placeholder="Enter your username"
                            className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 bg-gray-800 outline-none"
                            onChange={usernameValid}
                          />
                        </div>
                      </div>
                      {/* 
                    <div>
                      <label
                        for="password"
                        className={
                          erPass === ""
                            ? "text-base font-medium text-gray-200"
                            : "text-base font-medium text-red-700"
                        }
                      >
                        {erPass === "" ? "Password" : erPass}
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
                          name="password"
                          id="password"
                          ref={password}
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-gray-200 placeholder-gray-500 transition-all duration-200 bg-gray-800  rounded-md focus:outline-none outline-none focus:border-blue-600 caret-blue-600"
                          onChange={passwordValid}
                          autoComplete
                        />
                      </div>
                    </div> */}

                      <div>
                        <label
                          htmlFor="password"
                          className={
                            erPass === ""
                              ? "text-base font-medium text-gray-200"
                              : "text-base font-medium text-red-700"
                          }
                        >
                          {erPass === "" ? "Password" : erPass}
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
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                              />
                            </svg>
                          </div>

                          <input
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            id="password"
                            ref={password}
                            placeholder="Enter your password"
                            className="block w-full py-4 pl-10 pr-10 text-gray-200 placeholder-gray-500 transition-all duration-200 bg-gray-800 rounded-md focus:outline-none outline-none focus:border-blue-600 caret-blue-600"
                            onChange={passwordValid}
                            autoComplete="off"
                          />

                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button
                              type="button"
                              onClick={() => {
                                setPasswordVisible(!passwordVisible);
                              }}
                              className="focus:outline-none"
                            >
                              {passwordVisible ? (
                                <FontAwesomeIcon icon={faEye} />
                              ) : (
                                <FontAwesomeIcon icon={faEyeSlash} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {haveAc ? (
                        <div className="text-center">
                          <p className="text-base text-gray-600">
                            Forget Password
                            <Link
                              href="#"
                              title=""
                              className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline ml-2"
                              onClick={getPass}
                            >
                              Get password?
                            </Link>
                          </p>
                        </div>
                      ) : (
                        <>
                          <p
                            className={
                              ercheck === ""
                                ? "text-white font-medium"
                                : "text-red-700 font-medium"
                            }
                          >
                            {ercheck === "" ? "Privacy Policy" : ercheck}
                          </p>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name="agree"
                              id="agree"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
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
                        </>
                      )}
                      <div className="flex justify-center items-center">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center md:w-[50%] w-[80%] md:px-4 px-2 md:py-4 py-2 text-base  text-white transition-all duration-200 bg-cyan-800 uppercase font-bold rounded-md outline-none focus:outline-none my-5"
                          onClick={submit}
                        >
                          {haveAc ? "login" : "create account"}
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
                            className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline ml-2"
                            onClick={haveAc ? create : log}
                          >
                            {haveAc ? "Create" : "Login"}
                          </Link>
                        </p>
                      </div>
                    </div>
                  )}
                </form>
                {/* ////////////////////////////////////////////////////////////////////////// */}
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
