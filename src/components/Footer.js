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
    img {
      width: 30px;
      height: 30px;
    }
    .brand {
      align-self: flex-start;
    }
    .icon-header {
      display: flex;
    }
    .icon {
      margin-right: 20px;
    }
  `;
  return (
    <Wrapper>
      <div className="footer">
        <div className="item brand">
          <div className="icon-header">
            <img src="/assets/brand.png" alt="brand" /> <h3>NewVic</h3>
          </div>
          <h4>Follow Us</h4>
          <div className="icons-container">
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
          </div>
        </div>
        <div className="item">
          <h3>SERVICES</h3>
          <p>Accessibility</p>
          <p>Disclamers</p>
          <p>Sitemap</p>
          <p>Cookies </p>
        </div>
        <div className="item">
          <h3>RESOURCES</h3>
          <p>Blog</p>
          <p>Online training</p>
          <p>Qaulity for government contact</p>
          <p>National resource Guide</p>
        </div>
        <div className="item">
          <h3>OUR COMPNY</h3>
          <p>Contact us</p>
          <p>Privacy policy</p>
          <p>User agreement</p>
          <p>Privacy</p>
        </div>
      </div>
      <hr className="rule" />
      <p className="copywite">All Right reversed &copy; NewVic 2022 </p>
    </Wrapper>
  );
}

export default Footer;
