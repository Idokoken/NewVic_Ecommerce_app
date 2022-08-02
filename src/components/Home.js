import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/cover2.jpg"
          alt="background"
          className="card-img"
          height="550"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New season arrivals
            </h5>
            <p className="card-text lead fs-2">check out trending products</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
