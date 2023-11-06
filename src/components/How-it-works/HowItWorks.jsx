import React from "react";
import "./hiw.css";

const HowItWorks = () => {
  return (
    <div>
      <div className="">
        <div className="my-4 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h3>HOW IT WORKS</h3>
            <p>Learn More about how our website works</p>
          </div>
        </div>

        <div className="container">
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card hiw-card border-0 p-4 shadow">
                <div className="card-body text-center">
                  <p className="fs-3">
                    <i className="fa-regular fa-lightbulb fa-flip fa-2xl"></i>
                  </p>
                  <h5 className="card-title mt-4 fw-bold">Choose what to Do</h5>
                  <p className="card-text my-4">
                    Amid endless options, making the right choice demands
                    deliberation, intuition, and sometimes, a leap of faith.
                    Choose wisely, embrace life.
                  </p>
                  <a
                    href="#"
                    className="btn bg-white text-black border rounded-1"
                    style={{ fontSize: "12px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card hiw-card border-0 p-4 shadow">
                <div className="card-body text-center">
                  <p className="fs-3">
                    <i className="fa-regular fa-eye fa-bounce fa-2xl"></i>
                  </p>
                  <h5 className="card-title mt-4 fw-bold">
                    Find what you want
                  </h5>
                  <p className="card-text my-4">
                    In the labyrinth of life, serendipity guides us to find
                    unexpected treasures, moments of joy, and profound
                    self-discovery.
                  </p>
                  <a
                    href="#"
                    className="btn bg-white text-black border rounded-1"
                    style={{ fontSize: "12px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card hiw-card border-0 p-4 shadow">
                <div className="card-body text-center">
                  <p className="fs-3">
                    <i className="fa-solid fa-location-crosshairs fa-beat-fade fa-2xl"></i>
                  </p>
                  <h5 className="card-title mt-4 fw-bold">
                    Explore amazing Place
                  </h5>
                  <p className="card-text my-4">
                    Venturing into a world unknown, vibrant landscapes and
                    vibrant culture captivate the senses, as we explore an
                    amazing place anew.
                  </p>
                  <a
                    href="#"
                    className="btn bg-white text-black border rounded-1"
                    style={{ fontSize: "12px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
