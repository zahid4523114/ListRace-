import React, { useEffect, useState } from "react";
import "./explore.css";

const Explore = () => {
  const [explore, setExplore] = useState([]);

  useEffect(() => {
    fetch("listRace.json")
      .then((res) => res.json())
      .then((data) => setExplore(data));
  }, []);

  console.log(explore);

  return (
    <div>
      <div className="my-4">
        <div className="container text-center">
          <h2>EXPLORE</h2>
          <p>Explore New place, food, culture around the world and many more</p>
        </div>
        <div className="container">
          <div className="row g-3">
            {explore.map((e) => (
              <div key={e.id} className="col-lg-4 col-md-6 col-12">
                <div className="card border-0 booking-card">
                  <img src={e.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{e.place}</h5>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p
                        style={{ fontSize: "13px" }}
                        className="bg-success d-inline-block px-1 rounded-1 text-white fw-bold"
                      >
                        {e.ratings}
                      </p>
                      <p
                        style={{ fontSize: "13px" }}
                        className="border-end pe-1"
                      >
                        {e.ratingsCount}
                      </p>
                      <p
                        style={{ fontSize: "13px" }}
                        className="border-end pe-1"
                      >
                        From <span className="text-danger">{e.price}</span>
                      </p>
                      <p style={{ fontSize: "13px" }} className="">
                        {e.placeHouse}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <img className="" src={e.client} alt="" />
                      <p
                        style={{ fontSize: "14px" }}
                        className="card-text ps-3"
                      >
                        {e.placeDescription}
                      </p>
                    </div>
                  </div>

                  <div className="border-top mx-3 p-3 d-flex justify-content-between align-items-center">
                    {e.condition !== 0 ? (
                      <p style={{ fontSize: "14px" }} className="text-success">
                        Open Now
                      </p>
                    ) : (
                      <p style={{ fontSize: "14px" }} className="text-danger">
                        Close Now
                      </p>
                    )}
                    {e.condition !== 0 ? (
                      <button
                        style={{ fontSize: "14px" }}
                        className="border-0 btn btn-primary p-1"
                      >
                        Book Now
                      </button>
                    ) : (
                      <button
                        style={{ fontSize: "14px" }}
                        className="border-0 btn btn-primary p-1"
                      >
                        No Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
