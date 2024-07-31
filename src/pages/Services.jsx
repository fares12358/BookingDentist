import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Services = () => {
  return (
    <>
      <Nav />
      <section className="container mx-auto max-w-7xl  py-5 my-10">
        <p className="text-center text-cyan-500 font-bold text-4xl py-5 uppercase">
          Services
        </p>
        {/* <h1 className='text-center text-cyan-500 text-4xl font-bold py-5'>Choose The Best Services We Offers</h1> */}
        <div className="grid md:grid-cols-3 grid-cols-1  my-5 p-5 gap-2">
          <div className=" text-center flex flex-col justify-center items-center p-10">
            <div className="icon">
              <img
                className="img-fluid"
                src={require("../images/services1.png")}
                alt=""
              />
            </div>
            <h3 className="text-gray-100 font-bold text-xl py-5">
              Backteria Check
            </h3>
            <p className="text-gray-500 font-bold text-md py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt
              corporis consectetur, quisquam ab laboriosam
            </p>
          </div>

          <div className=" text-center flex flex-col justify-center items-center p-10">
            <div className="icon">
              <img
                className="img-fluid"
                src={require("../images/services2.png")}
                alt=""
              />
            </div>
            <h3 className="text-gray-100 font-bold text-xl py-5">Fillings</h3>
            <p className="text-gray-500 font-bold text-md  py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt
              corporis consectetur, quisquam ab laboriosam
            </p>
          </div>

          <div className=" text-center flex flex-col justify-center items-center p-10">
            <div className="icon">
              <img
                className="img-fluid"
                src={require("../images/services3.png")}
                alt=""
              />
            </div>
            <h3 className="text-gray-100 font-bold text-xl py-5">Cleaner</h3>
            <p className="text-gray-500 font-bold text-md  py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt
              corporis consectetur, quisquam ab laboriosam
            </p>
          </div>

          <div className=" text-center flex flex-col justify-center items-center p-10">
            <div className="icon">
              <img
                className="img-fluid"
                src={require("../images/services4.png")}
                alt=""
              />
            </div>
            <h3 className="text-gray-100 font-bold text-xl py-5">
              Controlling
            </h3>
            <p className="text-gray-500 font-bold text-md  py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt
              corporis consectetur, quisquam ab laboriosam
            </p>
          </div>

          <div className=" text-center flex flex-col justify-center items-center p-10">
            <div className="icon">
              <img
                className="img-fluid"
                src={require("../images/services5.png")}
                alt=""
              />
            </div>
            <h3 className="text-gray-100 font-bold text-xl py-5">Extraction</h3>
            <p className="text-gray-500 font-bold text-md  py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt
              corporis consectetur, quisquam ab laboriosam
            </p>
          </div>

          <div className=" text-center flex flex-col justify-center items-center p-10">
            <div className="icon">
              <img
                className="img-fluid"
                src={require("../images/services6.png")}
                alt=""
              />
            </div>
            <h3 className="text-gray-100 font-bold text-xl py-5">Whitening</h3>
            <p className="text-gray-500 font-bold text-md  py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt
              corporis consectetur, quisquam ab laboriosam
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-7xl  py-5 my-10 ">
        <h1 className="text-center text-3xl font-bold leading-tight text-cyan-500 sm:text-4xl lg:text-5xl my-10">
          Pricing & Plans
        </h1>
        <p class="text-center  text-lg leading-relaxed text-gray-400 px-5 md:my-20 mt-5">
          Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>

        <div className="pricing grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  py-20   gap-y-10">
          <div className="plane mx-auto   flex justify-center items-start flex-col  rounded-2xl text-md bg-gray-950">
            <div className="first flex flex-col ">
              <p className="text-xl uppercase">plane-1</p>
              <span className="text-3xl my-2">$10</span>
              <button className="bg-cyan-800 text-white p-3 rounded-md mt-5 uppercase text-sm">
                book now
              </button>
            </div>
            <div>Backteria Check</div>
            <div>Fillings</div>
            <div>Cleaner</div>
            <div>Controlling</div>
            <div>Extraction</div>
            <div>Whitening</div>
          </div>

          <div className="plane mx-auto  active flex justify-center items-start flex-col  rounded-2xl text-md bg-gray-950">
            <div className="first flex flex-col ">
              <p className="text-xl uppercase">plane-2</p>
              <span className="text-3xl my-2">$25</span>
              <button className="bg-cyan-800 text-white p-3 rounded-md mt-5 uppercase text-sm">
                book now
              </button>
            </div>
            <div>Backteria Check</div>
            <div>Fillings</div>
            <div>Cleaner</div>
            <div>Controlling</div>
            <div>Extraction</div>
            <div>Whitening</div>
          </div>

          <div className="plane mx-auto   flex justify-center items-start flex-col  rounded-2xl text-md bg-gray-950">
            <div className="first flex flex-col ">
              <p className="text-xl uppercase">plane-3</p>
              <span className="text-3xl my-2">$40</span>
              <button className="bg-cyan-800 text-white p-3 rounded-md mt-5 uppercase text-sm">
                book now
              </button>
            </div>
            <div>Backteria Check</div>
            <div>Fillings</div>
            <div>Cleaner</div>
            <div>Controlling</div>
            <div>Extraction</div>
            <div>Whitening</div>
          </div>
          <div className="plane mx-auto   flex justify-center items-start flex-col  rounded-2xl text-md bg-gray-950">
            <div className="first flex flex-col ">
              <p className="text-xl uppercase">plane-4</p>
              <span className="text-3xl my-2">$100</span>
              <button className="bg-cyan-800 text-white p-3 rounded-md mt-5 uppercase text-sm">
                book now
              </button>
            </div>
            <div>Backteria Check</div>
            <div>Fillings</div>
            <div>Cleaner</div>
            <div>Controlling</div>
            <div>Extraction</div>
            <div>Whitening</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
