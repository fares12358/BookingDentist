import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Nav />
      <section className="container mx-auto max-w-7xl py-10 mt-5 md:mt-20 ">
        <div className="bg-[#111827] text-gray-500 font-bold p-8">
          <header className="text-center mb-12">
            <h1 className="md:text-5xl text-3xl font-bold text-cyan-500">About Us</h1>
            <p className="md:text-2xl text-md mt-4">Welcome to [Dental Practice Name]!</p>
          </header>

          <main className="space-y-12 px-0 text-center md:text-start">
            {/* Introduction to the Practice */}
            <section className="md:py-5 py-0">
              <p className="mt-4 md:text-xl text-sm">
                At [Dental Practice Name], located in [Location], we have been
                dedicated to providing exceptional dental care since [Year]. Our
                goal is to ensure that every patient leaves with a healthy,
                beautiful smile.
              </p>
              </section>
            {/* Meet the Dentist */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                Meet Dr. [Dentist Name]
              </h2>
              <p className="mt-4 md:text-xl text-sm">
                Dr. [Dentist Name] has over [number] years of experience in
                dentistry. After graduating from [University Name], Dr. [Last
                Name] pursued specialized training in [Specialization].
                Passionate about patient care, Dr. [Last Name] is committed to
                making every visit as comfortable and stress-free as possible.
              </p>
            </section>

            {/* Philosophy and Approach */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                Our Philosophy
              </h2>
              <p className="mt-4 md:text-xl text-sm">
                We believe that dental care should be accessible, compassionate,
                and tailored to each individual. Our team uses the latest
                technology and techniques to provide the highest quality care.
              </p>
            </section>

            {/* Services Offered */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                Our Services
              </h2>
              <p className="mt-4 md:text-xl text-sm">
                We offer a wide range of services to meet all your dental needs,
                including:
                <ul className="list-disc list-inside mt-2 flex flex-col items-start">
                  <li>General Dentistry</li>
                  <li>Cosmetic Dentistry</li>
                  <li>Orthodontics</li>
                  <li>Preventive Care</li>
                  <li>Emergency Dental Services</li>
                </ul>
              </p>
            </section>

            {/* Patient Testimonials */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                What Our Patients Say
              </h2>
              <p className="mt-4 italic md:text-xl text-sm">
                "Dr. [Last Name] and the team are amazing! They made me feel at
                ease and explained everything clearly." - [Patient Name]
              </p>
            </section>

            {/* Community Involvement */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                Community Involvement
              </h2>
              <p className="mt-4 md:text-xl text-sm">
                We are proud to be a part of the [Location] community and
                actively participate in local events and charitable activities.
                Our mission extends beyond the clinic to promote dental health
                and education.
              </p>
            </section>

            {/* Office Environment */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                Our Office
              </h2>
              <p className="mt-4 md:text-xl text-sm">
                Our state-of-the-art office is designed with your comfort in
                mind. From the welcoming waiting area to the modern treatment
                rooms, we aim to create a relaxing environment.
              </p>
            </section>

            {/* Contact Information */}
            <section className="md:py-5 py-0">
              <h2 className="md:text-3xl text-xl font-semibold text-cyan-500">
                Contact Us
              </h2>
              <p className="mt-4 md:text-xl text-sm">
                Ready to book your appointment? Contact us today at [Phone
                Number] or [Email Address], or visit our contact page.
              </p>
            </section>
          </main>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
