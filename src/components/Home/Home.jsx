import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home-banner d-flex justify-content-center align-items-center">
        <div className="bannerText text-center">
          <h1 className="text-white fw-bolder fs-1">
            BEST PLACE TO FIND AND EXPLORE <br />
            THAT ALL YOU NEED
          </h1>
          <p className="text-white fw-semibold">
            Find Best Place, Restaurant, Hotel, Real State and many more think
            in just One click
          </p>
          <div className="d-flex justify-content-between align-items-center flex-lg-row flex-md-row flex-column bg-white p-4 rounded-0 mt-5">
            <div>
              <label className="fw-bold" htmlFor="place">
                what?
              </label>
              <input
                style={{ outline: "none" }}
                className="py-2 px-3 border-0"
                placeholder="Ex: Place,Restaurant,Food etc"
                type="text"
                name="place"
                id=""
              />
            </div>
            <div>
              <label className="fw-bold" htmlFor="location">
                Location:
              </label>
              <input
                style={{ outline: "none" }}
                className="py-2 px-3 border-0"
                placeholder="Ex: New york,London"
                type="text"
                name="location"
                id=""
              />
            </div>
            <div>
              <button className="btn btn-danger p-lg-2 p-md-2 px-5">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
