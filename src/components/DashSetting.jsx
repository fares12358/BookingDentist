import React from "react";

const DashSetting = () => {
  return (
    <>
      <h1 className="text-lg py-5 font-bold">Settings</h1>
      <section className="flex flex-col my-5">
        <div className="w-full h-[1px] bg-zinc-700"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-10">
          <div className="flex flex-col ">
            <span className="text-white my-3 font-bold text-[20px]">
              Organization Email
            </span>
            <span className="text-zinc-500 text-base text-[15px]">
              This is how customers can contact you for support
            </span>
          </div>
          <div className="mt-5 md:mt-0">
            <input
              type="email"
              placeholder={"fm883254@gmail.com"}
              className="px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600 "
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>

        <div className="flex flex-col md:flex-row items-start md:items-start justify-between my-10">
          <div className="flex flex-col">
            <span className="text-white my-3 font-bold text-[20px]">
              Address
            </span>
            <span className="text-zinc-500 text-base text-[15px]">
              This is where your organization is registered.
            </span>
          </div>
          <div className="mt-5 md:mt-0 flex flex-col w-[300px] max-w-full ">
            <input
              type="text"
              placeholder={"147 Catalyst Ave"}
              className=" my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600 "
            />
            <input
              type="text"
              placeholder={"cairo"}
              className="my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600 "
            />
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder={"new-cairo"}
                className="max-w-[40%] my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600 "
              />
              <input
                type="text"
                placeholder={"90-st"}
                className=" max-w-[40%]  my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600 "
              />
            </div>
            <input
              type="text"
              placeholder={"Egypt"}
              className=" my-5 px-5 py-1 bg-[#242427] outline-none rounded-lg border border-neutral-600 "
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-10">
          <div className="flex flex-col ">
            <span className="text-white my-3 font-bold text-[20px]">
              Website Language
            </span>
            <span className="text-zinc-500 text-base text-[15px]">
              This is for custom you website language
            </span>
          </div>
          <div className="mt-5 md:mt-0 flex">
            <label className="container p-5">
              Arabic
              <input type="radio" name="language" />
              <div className="checkmark"></div>
            </label>
            <label className="container p-5">
              English
              <input type="radio" name="language" checked />
              <div className="checkmark"></div>
            </label>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <div className="flex items-center py-5 my-5 justify-end">
          <button className="md:px-5 px-3 md:py-2 py-1 bg-neutral-600 rounded-lg border border-neutral-600 text-sm">
            Save Changes
          </button>
          <button className="ml-5 px-3 md:px-5 py-1 md:py-2 bg-neutral-800 rounded-lg border border-neutral-600 text-sm">
            Reset
          </button>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>

      </section>
    </>
  );
};

export default DashSetting;
