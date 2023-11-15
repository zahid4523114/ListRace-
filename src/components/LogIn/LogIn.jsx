import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import formLogo from "../../logo/undraw_mobile.svg";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const LogIn = () => {
  const { userSignIn } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      toast.error(`Password less than 8 characters`);
      return;
    }

    userSignIn(email, password)
      .then((result) => {
        form.reset();
        toast.success("LogIn successful");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="container d-flex justify-content-between align-items-lg-center flex-lg-row flex-md-column flex-column my-4 ">
      <div className=" image-container">
        <img
          className="d-lg-block login-image d-md-block d-none"
          src={formLogo}
          alt=""
        />
      </div>
      <form onSubmit={handleSignIn} className="input-container">
        <h2 className="mt-lg-0 mt-md-3 mt-3 text-center">Sign In</h2>
        <div>
          <div className="my-4">
            <input
              style={{ outline: "none" }}
              placeholder="Email"
              className="form-control px-4 container-fluid py-2"
              name="email"
              type="email"
            />
          </div>
          <div className="my-4">
            <input
              style={{ outline: "none" }}
              placeholder="Password"
              className="form-control px-4 container-fluid py-2"
              name="password"
              type="password"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/signUp" className="d-block text-decoration-none">
            Create an account.
          </Link>
          <Link to="" className="d-block text-decoration-none">
            Forgot password?
          </Link>
        </div>
        <div>
          <button
            style={{ backgroundColor: "#6C63FF" }}
            className="btn text-white my-4 container-fluid"
          >
            Log In
          </button>
          <h5 className="text-center ">or</h5>
          <button
            style={{ backgroundColor: "#6C63FF" }}
            className="btn text-white d-block mx-auto "
          >
            <i
              className="fa-brands fa-google fa-bounce me-1"
              style={{ color: "#ffffff" }}
            ></i>
            OOGLE{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
