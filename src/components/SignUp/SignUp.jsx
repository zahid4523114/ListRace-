import React, { useContext } from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
import formLogo from "../../logo/undraw_sign_up.svg";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const { userRegister, auth } = useContext(AuthContext);

  const handleSignUP = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      toast.error(`Password must be 8 characters`);
      return;
    }

    userRegister(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="container d-flex justify-content-between align-items-lg-center flex-lg-row flex-md-column flex-column my-4 ">
        <div className=" image-container">
          <img
            className="d-lg-block login-image d-md-block d-none"
            src={formLogo}
            alt=""
          />
        </div>
        <form onSubmit={handleSignUP} className="input-container">
          <h2 className="mt-lg-0 mt-md-3 mt-3 text-center">Sign Up</h2>
          <div>
            <div className="my-4">
              <input
                style={{ outline: "none" }}
                placeholder="User name"
                className="form-control required px-4 container-fluid py-2"
                name="name"
                type="text"
              />
            </div>
            <div className="my-4">
              <input
                style={{ outline: "none" }}
                placeholder="Email"
                className="form-control required px-4 container-fluid py-2"
                name="email"
                type="email"
              />
            </div>
            <div className="my-4">
              <input
                style={{ outline: "none" }}
                placeholder="Password"
                className="form-control required px-4 container-fluid py-2"
                name="password"
                type="password"
              />
            </div>
          </div>
          <div>
            <Link to="/logIn" className="d-block text-decoration-none">
              Already have an account.
            </Link>
          </div>
          <div>
            <button
              style={{ backgroundColor: "#6C63FF" }}
              className="btn text-white my-4 container-fluid"
            >
              Create Account
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
    </div>
  );
};

export default SignUp;
