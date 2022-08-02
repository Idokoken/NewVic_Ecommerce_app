import React from "react";
import styled from "styled-components";

function About() {
  const Wrapper = styled.div`
    min-height: 70vh;
    background-color: aliceblue;

    img {
      width: 100%;
      height: 80%;
    }
  `;
  return (
    <Wrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-12">
            <img src="/assets/office.jpg" alt="office" />
            <p>NewVic head Office Abuja</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
