import React from "react";
import { Footer, Navbar } from "../components";
import toast from "react-hot-toast";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-5 col-sm-10 mx-auto">
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="text-center">
                <button className="my-2 px-4 mx-auto btn btn-peach" type="submit">
                  Send Message
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

export default ContactPage;
