import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import BookConfirme from "./BookConfirme";

const Booking = () => {
  const { isloged } = useAuth();
  const { user } = useAuth();
  const { confirmed } = useAuth();
  const name = useRef();
  const code = useRef();
  const phone = useRef();
  const services = useRef();
  const day = useRef();
  const time = useRef();
  const [foucsCode, setFoucsCode] = useState(0);
  const setcode = (e) => {
    e.preventDefault();
    if (isloged) {
      setFoucsCode(user.code);
    } else {
      setIsSend("login to enable booking");
    }
  };
  /////////////////////////////////////// name validation ///////////////////////////////////////////
  const [nameValid, setnameValid] = useState("");
  const nameValidation = () => {
    setnameValid("");

    // Get the name value
    const nameValue = name.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof nameValue !== "string" || nameValue.length === 0) {
      setnameValid("name cannot be empty");
      return false;
    }
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(nameValue)) {
      setnameValid("Invalid input: only letters are allowed.");
    }

    return true;
  };
  /////////////////////////////////////// code validation ///////////////////////////////////////////

  const [codeValid, setcodeValid] = useState("");
  const codeValidation = () => {
    setcodeValid("");

    // Get the name value
    const codeValue = code.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof codeValue !== "string" || codeValue.length === 0) {
      setcodeValid("code cannot be empty");
      return false;
    }
    if (codeValue === "0") {
      setcodeValid("code cannot be zero");
      return false;
    }
    const regex = /^[0-9]+$/;

    if (!regex.test(codeValue)) {
      setcodeValid("Invalid input: only numbers are allowed.");
    }
    return true;
  };
  /////////////////////////////////////// phone validation ///////////////////////////////////////////
  const [phoneValid, setPhoneValid] = useState("");

  const phoneValidation = () => {
    setPhoneValid("");

    // Get the name value
    const phoneValue = phone.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof phoneValue !== "string" || phoneValue.length === 0) {
      setPhoneValid("phone cannot be empty");
      return false;
    }
    const regex = /^[0-9]+$/;

    if (!regex.test(phoneValue)) {
      setPhoneValid("Invalid input: only numbers are allowed.");
    }

    return true;
  };

  /////////////////////////////////////// services validation ///////////////////////////////////////////
  const [servicesValid, setServicesValid] = useState("");
  const servicesValidation = () => {
    setServicesValid("");

    const servicesValue = services.current.value;

    if (!servicesValue) {
      setServicesValid("Please select a service");
      return false;
    }

    return true;
  };

  /////////////////////////////////////// day validation ///////////////////////////////////////////
  const [dayValid, setDayValid] = useState("");
  const dayValidation = () => {
    setDayValid("");

    const dayValue = day.current.value;

    if (!dayValue) {
      setDayValid("Please select a day");
      return false;
    }

    return true;
  };

  /////////////////////////////////////// time validation ///////////////////////////////////////////
  const [timeValid, setTimeValid] = useState("");
  const timeValidation = () => {
    setTimeValid("");

    const timeValue = time.current.value;

    if (!timeValue) {
      setTimeValid("Please select a time");
      return false;
    }

    return true;
  };
  /////////////////////////////////////// view confirm ///////////////////////////////////////////
  const { Vconfirm } = useAuth();
  const { setVconfirm } = useAuth();

  /////////////////////////////////////// handel booking ///////////////////////////////////////////
  const [isSend, setIsSend] = useState("");
  const { setData } = useAuth();
  const { data } = useAuth();

  const handelBook = (e) => {
    e.preventDefault();
    const nameval = nameValidation();
    const codeval = codeValidation();
    const phoneval = phoneValidation();
    const serviceval = servicesValidation();
    const dayval = dayValidation();
    const timeval = timeValidation();

    if (nameval && codeval && phoneval && serviceval && dayval && timeval) {
      // Handle successful booking
      const data = {
        name: name.current.value,
        code: code.current.value,
        phone: phone.current.value,
        services: services.current.value,
        day: day.current.value,
        time: time.current.value,
      };
      setData(data);
      setVconfirm(true);
    }
  };
  const { setConfirmed } = useAuth();

  function post(data) {
    fetch("https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/booking", {
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
      .then(() => {
        setIsSend("Booking done successful");
        clearInputs(); // Clear input fields after successful post
        setConfirmed(false);
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }

  useEffect(() => {
    if (confirmed) {
      post(data);
      console.log("data posted");
    } else {
      console.log("data didn't confirmed");
    }
  }, [confirmed]);

  useEffect(() => {
    setTimeout(() => {
      setIsSend("");
    }, 4000);
  }, [isSend]);

  const clearInputs = () => {
    name.current.value = "";
    code.current.value = "";
    services.current.value = "";
    phone.current.value = "";
    day.current.value = "";
    time.current.value = "";
  };

  return (
    <>
      {Vconfirm ? (
        <BookConfirme />
      ) : (
        <form
          action=""
          className=" flex flex-col justify-start items-start p-0 md:p-5 min-h-64 md:w-[80%] w-[100%]  "
        >
          <p className="text-green-600 font-medium text-center w-full my-5">
            {isSend}
          </p>

          {/* //////////////////////////////////////////////name////////////////////////////////////////////////// */}
          <label
            className={
              nameValid === ""
                ? "text-base font-medium text-gray-200"
                : "text-base font-medium text-red-700"
            }
            for="name"
          >
            {nameValid === "" ? "Your name" : nameValid}
          </label>
          <input
            className="bg-gray-700 text-white px-5 py-3 rounded-lg mb-5 outline-none focus:outline-none w-[100%]  "
            type="text"
            placeholder="Enter your name"
            id="name"
            ref={name}
            onChange={nameValidation}
          />
          {/* ////////////////////////////////////////////////code//////////////////////////////////////////////// */}

          <label
            className={
              codeValid === ""
                ? "text-base font-medium text-gray-200"
                : "text-base font-medium text-red-700"
            }
            for="code"
          >
            {codeValid === "" ? "Your code" : <>{codeValid}</>}
            <button
              onClick={setcode}
              className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline ml-2"
            >
              get code?
            </button>
          </label>
          <input
            className="bg-gray-700 text-white px-5 py-3 rounded-lg mb-5 outline-none focus:outline-none w-[100%] "
            type="number"
            name="code"
            placeholder="Enter your code"
            id="code"
            ref={code}
            onChange={codeValidation}
            value={foucsCode}
          />
          {/* //////////////////////////////////////////////////phone////////////////////////////////////////////// */}

          <label
            className={
              phoneValid === ""
                ? "text-base font-medium text-gray-200"
                : "text-base font-medium text-red-700"
            }
            for="phone"
          >
            {phoneValid === "" ? "Your phone" : phoneValid}
          </label>
          <input
            className="bg-gray-700 text-white px-5 py-3 rounded-lg mb-5 outline-none focus:outline-none w-[100%]  "
            type="tel"
            placeholder="Enter your phone"
            id="phone"
            name="phone"
            ref={phone}
            onChange={phoneValidation}
          />
          {/* /////////////////////////////////////////services/////////////////////////////////////////////////////// */}

          <label
            className={
              servicesValid === ""
                ? "text-base font-medium text-gray-200"
                : "text-base font-medium text-red-700"
            }
            htmlFor="services"
          >
            {servicesValid === "" ? "Select a service" : servicesValid}
          </label>
          <select
            className="mb-5 bg-gray-700 text-white px-5 py-3 rounded-lg outline-none focus:outline-none w-[100%]"
            id="services"
            name="services"
            ref={services}
            onChange={servicesValidation}
          >
            <optgroup label="Choose a Service">
              <option value="">Select a Service</option>
              <option value="BackteriaCheck">Backteria Check</option>
              <option value="Fillings">Fillings</option>
              <option value="Cleaner">Cleaner</option>
              <option value="Controlling">Controlling</option>
              <option value="Extraction">Extraction</option>
              <option value="Whitening">Whitening</option>
            </optgroup>
          </select>

          {/* /////////////////////////////////////////day/////////////////////////////////////////////////////// */}
          <label
            className={
              dayValid === ""
                ? "text-base font-medium text-gray-200"
                : "text-base font-medium text-red-700"
            }
            htmlFor="day"
          >
            {dayValid === "" ? "Select a day" : dayValid}
          </label>
          <select
            className="mb-5 bg-gray-700 text-white px-5 py-3 rounded-lg outline-none focus:outline-none w-[100%]"
            id="day"
            name="day"
            ref={day}
            onChange={dayValidation}
          >
            <optgroup label="Choose a Day">
              <option value="">Select a Day</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </optgroup>
          </select>
          {/* /////////////////////////////////////////time/////////////////////////////////////////////////////// */}
          <label
            className={
              timeValid === ""
                ? "text-base font-medium text-gray-200"
                : "text-base font-medium text-red-700"
            }
            for="time"
          >
            {timeValid === "" ? "Select a time" : timeValid}
          </label>
          <select
            className=" bg-gray-700 text-white px-5 py-3 rounded-lg outline-none focus:outline-none w-[100%]"
            id="time"
            name="time"
            ref={time}
            onChange={timeValidation}
          >
            <optgroup label="Choose a Time">
              <option value="">Select a Time</option>
              <option value="8am-9am">8am-9am</option>
              <option value="9am-10am">9am-10am</option>
              <option value="10am-11am">10am-11am</option>
              <option value="11am-12am">11am-12am</option>
              <option value="12am-1pm">12am-1pm</option>
              <option value="1pm-2pm">1pm-2pm</option>
              <option value="2pm-3pm">2pm-3pm</option>
            </optgroup>
          </select>
          {/* /////////////////////////////////////////submit/////////////////////////////////////////////////////// */}

          <button
            className="send bg-cyan-800 text-white px-5 py-3 mx-auto rounded-lg mt-10 font-bold uppercase"
            onClick={handelBook}
          >
            Book An Appointment
          </button>
        </form>
      )}
    </>
  );
};

export default Booking;
