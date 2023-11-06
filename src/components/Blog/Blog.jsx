import React from "react";
import "./blog.css";
import blogImage1 from "../../images/blog/b1.jpg";
import blogImage2 from "../../images/blog/b2.jpg";
import blogImage3 from "../../images/blog/b3.jpg";

const Blog = () => {
  return (
    <div>
      <div className="container mt-4 mb-5">
        <div className=" d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h3>NEWS AND ARTICLES</h3>
            <p>Always upto date with our latest News and Articles</p>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card border-0 rounded-0 news-card">
              <img
                src={blogImage1}
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{ fontSize: "16px" }} className="card-title fw-bold">
                  How to find your Desired Place more quickly
                </h5>

                <div className="d-flex mt-3">
                  <p style={{ fontSize: "13px" }} className="border-end pe-1">
                    Posted By <span className="fw-bold">ADMIN</span>
                  </p>
                  <p style={{ fontSize: "13px" }} className="ps-1">
                    March 2018
                  </p>
                </div>
                <p style={{ fontSize: "14px" }} className="card-text">
                  To expedite your quest for your desired place, employ
                  effective research, ask locals, leverage technology, and trust
                  your instincts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card border-0 rounded-0 news-card">
              <img
                src={blogImage2}
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{ fontSize: "16px" }} className="card-title fw-bold">
                  How to find your Desired Place more quickly
                </h5>

                <div className="d-flex mt-3">
                  <p style={{ fontSize: "13px" }} className="border-end pe-1">
                    Posted By <span className="fw-bold">ADMIN</span>
                  </p>
                  <p style={{ fontSize: "13px" }} className="ps-1">
                    March 2018
                  </p>
                </div>
                <p style={{ fontSize: "14px" }} className="card-text">
                  To expedite your quest for your desired place, employ
                  effective research, ask locals, leverage technology, and trust
                  your instincts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card border-0 rounded-0 news-card">
              <img
                src={blogImage3}
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{ fontSize: "16px" }} className="card-title fw-bold">
                  How to find your Desired Place more quickly
                </h5>

                <div className="d-flex mt-3">
                  <p style={{ fontSize: "13px" }} className="border-end pe-1">
                    Posted By <span className="fw-bold">ADMIN</span>
                  </p>
                  <p style={{ fontSize: "13px" }} className="ps-1">
                    March 2018
                  </p>
                </div>
                <p style={{ fontSize: "14px" }} className="card-text">
                  To expedite your quest for your desired place, employ
                  effective research, ask locals, leverage technology, and trust
                  your instincts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
