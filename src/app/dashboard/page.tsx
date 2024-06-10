import React from "react";
import Hero from "../components/Hero";
import Newarrivals from "../components/Newarrivals";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const page = () => {
  return (
    // <div className='flex content-center items-center justify-center mt-52 text-5xl font-bold text-red-500'>
    //     Welcome to Dashboard
    // </div>
    <>
      <div className="mt-5">
        <Hero />
        <Newarrivals />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default page;
