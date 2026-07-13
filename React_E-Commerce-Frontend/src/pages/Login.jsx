import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import toast from "react-hot-toast";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Logged in successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-5 col-sm-10 mx-auto">
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="floatingPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link>
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-peach" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
