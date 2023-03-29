import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  min-height: 70vh;
  background-color: aliceblue;
  font-family: "Times New Roman", Times, serif;

  .img-container {
    width: 100%;
    height: 50vh;
    margin: 0;
    ${tablet({ height: "60vh" })}
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .about {
    position: relative;
  }
  .about p {
    position: absolute;
    font-size: 20px;
    color: white;
    font-family: "Oleo Script", cursive;
    bottom: 10px;
    left: 30px;
    font-weight: 500;
  }
  .desc p {
    font-size: 20px;
    line-height: 2;
  }
  .desc h3 {
    font-size: 30px;
    font-weight: 600;
    color: rgb(121, 7, 45);
    font-family: "Roboto", sans-serif;
  }
`;

function About() {
  return (
    <Wrapper>
      <div className="container-fluid  pb-3">
        <div className="row my-0 about">
          <div className="col-12 my-0 img-container">
            <img src="/assets/office.jpg" alt="office" />
          </div>
          <p>NewVic head Office Abuja</p>
        </div>
        <div className="row px-4 py-3 mt-0 desc">
          <div className="col-12">
            <h3 className="my-4">About Us</h3>
            <p>
              Founded in 2021 in Abuja, NewVic is a national leading
              direct-to-consumer online shop, providing well-selected products
              that are highly cost-effective to its registered users, with a
              national reach in Abuja, Lagos, Port-Harcult, Enugu, and Delta. In
              2021. NewVic devotes to improving customer service, including
              establishing a logistics and fulfillment system, to provide a 7/24
              professional service to customers.
            </p>
            <p>
              NewVic is one of Nigeria's largest online shop and our mission is
              to become the engine of commerce and trade in Nigeria. We serve a
              retail customer base that continues to grow exponentially,
              offering products that span various categories including Phones,
              Computers, Clothing, Shoes, Home Appliances, Baby Products,
              personal care and much more. Our range of services are designed to
              ensure optimum levels of convenience and customer satisfaction
              with the retail process; these services include our lowest price
              guarantee, 7-day free return policy, order delivery-tracking,
              dedicated customer service support and many other premium
              services. As we continue to expand the shop, our scope of
              offerings will increase in variety, simplicity and convenience;
              join us and enjoy the increasing benefits. We are highly
              customer-centric and are committed towards finding innovative ways
              of improving our customers' shopping experience with us; so give
              us some feedback on help@newic.com. For any press related
              questions, kindly send us an email at press@newvic.com. Thank you
              and we hope you enjoy your experience with us.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
