import React from "react";
import arrow from "../images/icon-arrow-down.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <h1 className="uppercase text-white tracking-widest text-center">
            We are creatives
          </h1>
          <img src={arrow} alt="" className="mt-20" />
        </div>
      </section>
    </>
  );
};

export default Showcase;
