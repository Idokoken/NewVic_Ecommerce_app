import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart } from "../redux/index";
import styled from "styled-components";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    return dispatch(addCart(product));
  };
  const delProduct = (product) => {
    return dispatch(delCart(product));
  };

  const itemPrice = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const taxPrice = itemPrice * 0.12;
  const shippingPrice = itemPrice > 500 ? 0 : 20;
  const totalPrice = itemPrice + shippingPrice + taxPrice;

  //css section
  const Wrapper = styled.div`
    min-height: 70vh;

    span,
    button {
      height: 40px;
      width: 40px;
      border: 2px solid black;
      border-radius: 5px;
    }
    .total {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .cart {
      background-color: aliceblue;
    }
  `;

  const listCartItem = cart.map((item, i) => (
    <div className="row cart p-3 mb-2" key={item.id}>
      <div className="col-12 col-md-6">
        <img
          src={item.image}
          alt={item.title}
          className=""
          style={{
            maxWidth: "300px",
            maxHeight: "300px",
          }}
        />
      </div>
      <div className="col-12 col-md-6">
        <h5>{item.title}</h5>
        <button onClick={() => addProduct(item)}>+</button>
        <button onClick={() => delProduct(item)}>-</button>
        <h5>Price: ${item.price.toFixed(2)}</h5>
        <h5>Quantity: {item.qty}</h5>
        <p>
          {item.qty} * {item.price.toFixed(2)}
        </p>
      </div>
    </div>
  ));

  return (
    <Wrapper>
      <div className="container-fluid my-3 p-4">
        <h2 className="text-center mb-4 color-info">Cart Items</h2>
        {cart.length === 0 ? (
          <h5>
            Cart is empty, go to products List to add your favourite products to
            your cart
          </h5>
        ) : (
          listCartItem
        )}
      </div>
    </Wrapper>
  );
}

export default Cart;
