import React from "react";
import arrow from "../images/icon-arrow-down.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <h1 className="text-4xl uppercase text-white tracking-widest">
            We are creatives
          </h1>
          <img src={arrow} alt="" />
        </div>
      </section>
    </>
  );
};

export default Showcase;
