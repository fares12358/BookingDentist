import React from "react";

const Booking = () => {


  const handelBook= (e)=>{
    e.preventDefault();
    let name=document.getElementById("name");
    let code=document.getElementById("code");
    let phone=document.getElementById("phone");
    let Services=document.getElementById("Services");
    let day=document.getElementById("day");
    let time=document.getElementById("time");
    console.log(name.value);
    console.log(code.value);
    console.log(phone.value);
    console.log(Services.value);
    console.log(day.value);
    console.log(time.value);
  }



  return (
    <>
      <form
        action=""
        className=" flex flex-col justify-start items-center p-0 md:p-5 min-h-64 md:w-[80%] w-[100%]  "
      >
        <input
          className="bg-gray-700 text-white px-5 py-3 rounded-lg mt-5 outline-none focus:outline-none w-[100%]  "
          type="text"
          placeholder="Enter your name"
          id="name"
        />
        <input
          className="bg-gray-700 text-white px-5 py-3 rounded-lg mt-5 outline-none focus:outline-none w-[100%] "
          type="number"
          placeholder="Enter your code"
          id="code"
        />
        <input
          className="bg-gray-700 text-white px-5 py-3 rounded-lg mt-5 outline-none focus:outline-none w-[100%]  "
          type="number"
          placeholder="Enter your phone"
          id="phone"
        />
        <select
          className="mt-5 bg-gray-700 text-white px-5 py-3 rounded-lg  outline-none focus:outline-none w-[100%]"
          id="Services"
          name="Services"
        >
          <optgroup label="Choose a Services ">
            <option value="BackteriaCheck">Backteria Check</option>
            <option value="Fillings">Fillings</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Controlling">Controlling</option>
            <option value="Extraction">Extraction</option>
            <option value="Whitening">Whitening</option>
          </optgroup>
        </select>
        <select
          className="mt-5 bg-gray-700 text-white px-5 py-3 rounded-lg  outline-none focus:outline-none w-[100%] "
          id="day"
          name="day"
        >
          <optgroup label="Choose a day">
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </optgroup>
        </select>
        <select
          className="mt-5 bg-gray-700 text-white px-5 py-3 rounded-lg  outline-none focus:outline-none w-[100%] "
          id="time"
          name="time"
        >
          <optgroup label="Choose a time">
            <option value="8am-9am">8am-9am</option>
            <option value="9am-10am">9am-10am</option>
            <option value="10am-11am">10am-11am</option>
            <option value="11am-12am">11am-12am</option>
            <option value="12am-1pm">12am-1pm</option>
            <option value="1pm-2pm">1pm-2pm</option>
            <option value="2pm-3pm">2pm-3pm</option>
          </optgroup>
        </select>
        <button className="send bg-cyan-800 text-white px-5 py-3 rounded-lg mt-10 font-bold uppercase"
        onClick={handelBook}
        >
          Book An Appointment
        </button>
      </form>
    </>
  );
};

export default Booking;
