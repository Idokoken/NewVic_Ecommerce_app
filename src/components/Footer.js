import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";

function Footer() {
  const Wrapper = styled.footer`
    background-color: black;
    padding: 0;
    margin: 0;
    color: white;

    .footer {
      width: 100vw;
      display: flex;
      align-items: center;
      padding: 20px;
      flex-wrap: wrap;
    }

    .footer .item {
      flex: 100%;
      ${tablet({ flex: "25%", justifyContent: "center" })}
    }
    .footer .item h3 {
      color: rgb(121, 7, 45);
    }
    .rule {
      border: 4px solid white;
    }
    .copywite {
      text-align: center;
      padding-bottom: 20px;
    }
  `;
  return (
    <Wrapper>
      <div className="footer">
        <div className="item">
          <div className="icon-header">
            <img src="/assets/brand.png" alt="brand" /> <h3>NewVic</h3>
          </div>
          <div className="icons-container">icon</div>
        </div>
        <div className="item">
          <h3>heading</h3>
          <p>lorem episum</p>
          <p>lorem episum</p>
          <p>lorem episum</p>
          <p>lorem episum</p>
        </div>
        <div className="item">
          <h3>heading</h3>
          <p>lorem episum</p>
          <p>lorem episum</p>
          <p>lorem episum</p>
          <p>lorem episum</p>
        </div>
        <div className="item">
          <h3>heading</h3>
          <p>lorem episum</p>
          <p>lorem episum</p>
          <p>lorem episum</p>
          <p>lorem episum</p>
        </div>
      </div>
      <hr className="rule" />
      <p className="copywite">All Right reversed &copy; NewVic 2022 </p>
    </Wrapper>
  );
}

export default Footer;
