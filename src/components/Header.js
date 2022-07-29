import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Header() {
  const counter = useSelector((state) => state.cart);

  //css section
  const Wrapper = styled.header`
    margin: 0;

    .nav-link,
    .navbar-brand {
      color: rgb(121, 7, 45) !important;
      font-weight: bold;
    }
    .nav-link:focus {
      color: black !important;
      font-weight: bolder;
    }
  `;

  return (
    <Wrapper>
      <nav class="navbar sticky-top navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="/assets/brand.png"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top me-2"
            />
            NewVic
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/login" className="btn btn-outline-dark me-2 my-1">
                  <i className="fa fa-sign-in me-1"></i>Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/register"
                  className="btn btn-outline-dark me-2 my-1"
                >
                  <i className="fa fa-user-plus me-1"></i>Register
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/cart" className="btn btn-outline-dark me-2 my-1">
                  <i className="fa fa-shopping-cart me-1 "></i>Cart (
                  {counter.length !== 0 ? counter.length : 0})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Header;
