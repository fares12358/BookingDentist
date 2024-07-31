import React from 'react'
import Nav from '../components/Nav'
import Footer from "../components/Footer";
const Services = () => {
  return (
    <>
    <Nav/>
    <section className='container mx-auto max-w-7xl  py-5 my-10'>
      <p className='text-center text-cyan-500 font-bold text-4xl py-5 uppercase'>Services</p>
      {/* <h1 className='text-center text-cyan-500 text-4xl font-bold py-5'>Choose The Best Services We Offers</h1> */}
      <div className="grid md:grid-cols-3 grid-cols-1  my-5 p-5 gap-2">

        <div className=" text-center flex flex-col justify-center items-center p-10">
          <div className="icon">
            <img className='img-fluid' src={require("../images/services1.png")} alt="" />
          </div>
          <h3 className='text-gray-100 font-bold text-xl py-5'>Backteria Check</h3>
          <p className='text-gray-500 font-bold text-md py-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt corporis consectetur, quisquam ab laboriosam</p>
        </div>


        <div className=" text-center flex flex-col justify-center items-center p-10">
          <div className="icon">
            <img className='img-fluid' src={require("../images/services2.png")} alt="" />
          </div>
          <h3 className='text-gray-100 font-bold text-xl py-5'>Fillings</h3>
          <p className='text-gray-500 font-bold text-md  py-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt corporis consectetur, quisquam ab laboriosam</p>
        </div>

        <div className=" text-center flex flex-col justify-center items-center p-10">
          <div className="icon">
            <img className='img-fluid' src={require("../images/services3.png")} alt="" />
          </div>
          <h3 className='text-gray-100 font-bold text-xl py-5'>Cleaner</h3>
          <p className='text-gray-500 font-bold text-md  py-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt corporis consectetur, quisquam ab laboriosam</p>
        </div>


        <div className=" text-center flex flex-col justify-center items-center p-10">
          <div className="icon">
            <img className='img-fluid' src={require("../images/services4.png")} alt="" />
          </div>
          <h3 className='text-gray-100 font-bold text-xl py-5'>Controlling</h3>
          <p className='text-gray-500 font-bold text-md  py-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt corporis consectetur, quisquam ab laboriosam</p>
        </div>


        <div className=" text-center flex flex-col justify-center items-center p-10">
          <div className="icon">
            <img className='img-fluid' src={require("../images/services5.png")} alt="" />
          </div>
          <h3 className='text-gray-100 font-bold text-xl py-5'>Extraction</h3>
          <p className='text-gray-500 font-bold text-md  py-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt corporis consectetur, quisquam ab laboriosam</p>
        </div>


        <div className=" text-center flex flex-col justify-center items-center p-10">
          <div className="icon">
            <img className='img-fluid' src={require("../images/services6.png")} alt="" />
          </div>
          <h3 className='text-gray-100 font-bold text-xl py-5'>Whitening</h3>
          <p className='text-gray-500 font-bold text-md  py-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt corporis consectetur, quisquam ab laboriosam</p>
        </div>


      </div>
    </section>
    <Footer />
    </>
  )
}

export default Services