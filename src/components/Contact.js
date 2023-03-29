import React, { Component } from "react";
import styled from "styled-components";

class Contact extends Component {
  render() {
    const Wrapper = styled.div`
      min-height: 70vh;
      background-color: aliceblue;
      font-family: "Times New Roman", Times, serif;

      section {
        display: flex;
        align-items: flex-start;
        margin: 30px 0;
      }
      .phone p,
      .email p {
        font-family: "Pacifico", cursive;
        font-size: 20px;
        font-weight: 400;
      }
      .email {
        display: flex;
      }
      h2,
      h3 {
        color: rgb(121, 7, 45);
        font-weight: 500;
      }
    `;
    return (
      <Wrapper>
        <div className="container-fluid py-3">
          <div className="m-3">
            <h2 className="mb-3">Reach us on our office lines, available</h2>
            <h5>8.00 am to 5.00pm Monday to Friday</h5>
            <h5>9.00 amm to 4.00 pm on Saturday</h5>
            <section className="phone">
              <h3 className="me-3">Phone</h3>
              <div>
                <p>tel +234982005577</p>
                <p>tel +234982004747</p>
                <p>tel +234982002211</p>
              </div>
            </section>
            <div className="email">
              <h3 className="me-3">Email</h3>
              <p className="">new.ng@yahoo.com</p>
            </div>
          </div>

          <div className="container mt-3">
            <h3 className="text-center">
              Reach us for your complains and enquires
            </h3>
            <form method="post" action="/contact">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
