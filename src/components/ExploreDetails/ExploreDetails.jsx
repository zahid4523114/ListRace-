import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ExploreDetails = () => {
  const exploreData = useLoaderData();
  const explore = exploreData[0];
  const { image, place, ratings, price, placeDescription } = explore;
  const explorers = exploreData[1];
  console.log(explorers);
  return (
    <div className="p-4">
      <div className="my-5">
        <div className="card border-0 mb-3">
          <div className="row g-3">
            <div className="col-lg-4  col-md-6 ">
              <img src={image} className="img-fluid" alt="..." />
            </div>
            <div className="col-lg-8  col-md-6">
              <div className="card-body p-0">
                <div className="">
                  <h5 className="card-title fw-bold">{place}</h5>
                  <h5 className="fw-bold my-3">{price}</h5>
                </div>
                <p className="card-text">{placeDescription}</p>
                <p className="card-text">
                  <small className="text-muted fw-bold">{ratings}</small>
                </p>
                <button
                  style={{ backgroundColor: "#6C63FF" }}
                  className="btn text-white rounded-0 container-fluid fw-semibold"
                >
                  CONFIRM BOOKING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h4 className="mb-3 fw-bold">Want's to book more</h4>
        <div className="row g-3">
          {explorers.map((e) => (
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
                    <p style={{ fontSize: "13px" }} className="border-end pe-1">
                      {e.ratingsCount}
                    </p>
                    <p style={{ fontSize: "13px" }} className="border-end pe-1">
                      From <span className="text-danger">{e.price}</span>
                    </p>
                    <p style={{ fontSize: "13px" }} className="">
                      {e.placeHouse}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <img className="" src={e.client} alt="" />
                    <p style={{ fontSize: "14px" }} className="card-text ps-3">
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
                    <Link to={`/explore/${e.id}`}>
                      <button
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#6C63FF",
                        }}
                        className="border-0 btn text-white p-1"
                      >
                        Book Now
                      </button>
                    </Link>
                  ) : (
                    <button
                      style={{ fontSize: "14px", backgroundColor: "#6C63FF" }}
                      className="border-0 btn text-white p-1"
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
  );
};

export default ExploreDetails;
