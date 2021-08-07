import React from "react";
import { ReactComponent as Hero } from "./assets/illustration-hero.svg";
import { ReactComponent as Music } from "./assets/icon-music.svg";
function App() {
  return (
    <body className="h-auto pt-10  bg-mobile-pattern lg:bg-desktop-pattern bg-cover  flex flex-col items-center justify-center font-red-hat-display">
      <section className="w-60 md:w-min  bg-white rounded-xl overflow-hidden flex flex-col items-center shadow-2xl">
        <div className="">
          <Hero />
        </div>

        <div className="container flex flex-col items-center ">
          <h1 className="text-dark-blue text-2xl font-extrabold pt-8">
            Order Summary
          </h1>
          <p className="px-10 py-4 text-center text-desaturated-blue">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>

        <div className="flex w-full pt-6 justify-around ">
          <div class="flex">
            <Music className="mr-4" />
            <div>
              <h3 className="text-dark-blue text-md  font-extrabold">
                Annual Plan
              </h3>
              <p className="text-desaturated-blue text-sm">$59.99/year</p>
            </div>
          </div>
          <button className="text-sm text-bright-blue font-bold">
            {" "}
            Change
          </button>
        </div>

        <div className="w-full flex flex-col items-center py-10">
          <button className="bg-bright-blue w-3/4 rounded-lg py-2 text-white font-bold">
            Proceed to Payment
          </button>
          <button className="pt-6 text-desaturated-blue font-bold">
            Cancel Order
          </button>
        </div>
      </section>
      <footer className=" text-sm md:text-md">
        Challenge by Frontend Mentor. Coded by Julian Vicente.
      </footer>
    </body>
  );
}

export default App;
