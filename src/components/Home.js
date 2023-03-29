import React from "react";
import styled from "styled-components";
import Products from "./Products";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  .home-img {
    height: 50vh;
    ${tablet({ height: "60vh" })}
  }
`;

function Home() {
  return (
    <Wrapper className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/cover2.jpg"
          alt="background"
          className="card-img home-img"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New season arrivals
            </h5>
            <p className="card-text lead fs-2">check out trending Products</p>
          </div>
        </div>
      </div>
      <Products />
    </Wrapper>
  );
}

export default Home;
