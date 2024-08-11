import emailjs from "@emailjs/browser";
import React, { useRef, useState ,useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Contact = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  const city = useRef();
  const [isvalidname, setisvalidname] = useState("");
  const [isvalidemail, setisvalidemail] = useState("");
  const [isvalidphone, setisvalidphone] = useState("");
  const [isvalidcity, setisvalidcity] = useState("");
  const [isvalidmsg, setisvalidmsg] = useState("");

  /////////////////////////// name validation //////////////////////////////////////////
  const nameValid = () => {
    setisvalidname("");

    // Get the name value
    const nameValue = name.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof nameValue !== "string" || nameValue.length === 0) {
      setisvalidname("name cannot be empty");
      return false;
    }
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(nameValue)) {
      setisvalidname("Invalid input: only letters are allowed.");
    }

    return true;
  };
  /////////////////////////// email validation //////////////////////////////////////////

  const emailValid = () => {
    setisvalidemail("");

    // Get the name value
    const emailValue = email.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (emailValue.length === 0) {
      setisvalidemail("email cannot be empty");
      return false;
    }
    // Split the name by spaces to handle multiple words
    const words = emailValue.split(" ");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression

    if (!regex.test(words)) {
      setisvalidemail("Invalid email address.");
      return false;
    }

    return true;
  };
  /////////////////////////// phone validation //////////////////////////////////////////

  const phoneValid = () => {
    setisvalidphone("");

    // Get the name value
    const phoneValue = phone.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof phoneValue !== "string" || phoneValue.length === 0) {
      setisvalidphone("phone cannot be empty");
      return false;
    }
    const regex = /^[0-9]+$/;

    if (!regex.test(phoneValue)) {
      setisvalidphone("Invalid input: only numbers are allowed.");
    }

    return true;
  };
  /////////////////////////// city validation //////////////////////////////////////////

  const cityValid = () => {
    setisvalidcity("");

    // Get the name value
    const cityValue = city.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof cityValue !== "string" || cityValue.length === 0) {
      setisvalidcity("city cannot be empty");
      return false;
    }
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(cityValue)) {
      setisvalidcity("Invalid input: only letters are allowed.");
    }
    return true;
  };
  /////////////////////////// message validation //////////////////////////////////////////

  const msgValid = () => {
    setisvalidmsg("");

    // Get the name value
    const msgValue = message.current.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the name is empty or not a string
    if (typeof msgValue !== "string" || msgValue.length === 0) {
      setisvalidmsg("message cannot be empty");
      return false;
    }

    return true;
  };
  /////////////////////////// send email //////////////////////////////////////////

  const [isSend, setIsSend] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    const nameval = nameValid();
    const emailval = emailValid();
    const phoneval = phoneValid();
    const cityval = cityValid();
    const msgval = msgValid();
    if (
      nameval &&
      emailval &&
      phoneval &&
      cityval &&
      msgval &&
      name.current.value !== "" &&
      email.current.value !== "" &&
      city.current.value !== "" &&
      phone.current.value !== "" &&
      message.current.value !== ""
    ) {
      const templateParams = {
        from_name: name.current.value,
        email_sender: email.current.value,
        city_sender: city.current.value,
        number_sender: phone.current.value,
        message: message.current.value,
      };

      emailjs
        .send(
          "service_5ls0rvl", // replace with your service ID
          "template_47yhsal", // replace with your template ID
          templateParams,
          "aKUdjmA0drWLqPjjp" // replace with your user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSend("Message sent successfully!");
            clearInputs();
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message, please try again later.");
          }
        );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSend("")
    }, 5000);
  }, [isSend]);

  const clearInputs = () => {
    name.current.value = "";
    email.current.value = "";
    city.current.value = "";
    phone.current.value = "";
    message.current.value = "";
  };
  return (
    <>
      <Nav />
      <section className="container mx-auto max-w-7xl py-10 mt-5 md:mt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-gray-900  rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-100">
                    +1-316-555-0116
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-100">
                    +1-446-526-0117
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-gray-900  rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-100">
                    contact@example.com
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-100">
                    hr@example.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-gray-900  rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-100">
                    8502 Preston Rd. Ingle, Maine 98380, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 overflow-hidden bg-gray-900  rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-100">
                  Send us a message
                </h3>
                <p className="text-green-600 font-medium text-center my-5">{isSend}</p>
                {/* //////////////////////////////////////         form start            ///////////////////////////////////////// */}
                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label
                        for="name"
                        className={
                          isvalidname === ""
                            ? "text-base font-medium text-gray-200"
                            : "text-base font-medium text-red-700"
                        }
                      >
                        {isvalidname === "" ? "Your name" : isvalidname}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          ref={name}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-gray-100 placeholder-gray-500 transition-all duration-200 bg-gray-800  rounded-md outline-none focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={nameValid}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="email"
                        className={
                          isvalidemail === ""
                            ? "text-base font-medium text-gray-200"
                            : "text-base font-medium text-red-700"
                        }
                      >
                        {isvalidemail === "" ? "Your Email" : isvalidemail}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          ref={email}
                          placeholder="Enter your email"
                          className="block w-full px-4 py-4 text-gray-100 placeholder-gray-500 transition-all duration-200 bg-gray-800  rounded-md outline-none focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={emailValid}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="phone"
                        className={
                          isvalidphone === ""
                            ? "text-base font-medium text-gray-200"
                            : "text-base font-medium text-red-700"
                        }
                      >
                        {isvalidphone === "" ? "Phone number" : isvalidphone}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          ref={phone}
                          placeholder="Enter your phone"
                          className="block w-full px-4 py-4 text-gray-100 placeholder-gray-500 transition-all duration-200 bg-gray-800 rounded-md outline-none focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={phoneValid}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="city"
                        className={
                          isvalidcity === ""
                            ? "text-base font-medium text-gray-200"
                            : "text-base font-medium text-red-700"
                        }
                      >
                        {isvalidcity === "" ? "Your City" : isvalidcity}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          ref={city}
                          placeholder="Enter your city"
                          className="block w-full px-4 py-4 text-gray-100 placeholder-gray-500 transition-all duration-200 bg-gray-800 rounded-md outline-none focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={cityValid}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        for="msg"
                        className={
                          isvalidmsg === ""
                            ? "text-base font-medium text-gray-200"
                            : "text-base font-medium text-red-700"
                        }
                      >
                        {isvalidmsg === "" ? "Your Message" : isvalidmsg}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="msg"
                          id="msg"
                          ref={message}
                          placeholder="write your massage"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-gray-800 rounded-md resize-y outline-none focus:outline-none text-white "
                          rows="4"
                          onChange={msgValid}
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        onClick={sendEmail}
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-cyan-900 border border-transparent rounded-md outline-none   focus:outline-none"
                      >
                        Send
                      </button>
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

export default Contact;
