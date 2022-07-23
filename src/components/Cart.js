import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart } from "../redux/index";

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

  const cartSummary = () => (
    <>
      <hr />
      <div classname="row">
        <div className="col-6">Item Price:</div>
        <div className="col-4">{itemPrice.toFixed(2)}</div>
      </div>
      <div classname="row">
        <div className="col-6">tax Price</div>
        <div className="col-4">{taxPrice.toFixed(2)}</div>
      </div>
      <div classname="row">
        <div className="col-6">Shipping Price:</div>
        <div className="col-4">{shippingPrice.toFixed(2)}</div>
      </div>
      <div classname="row">
        <div className="col-6">
          <strong>Total price</strong>:
        </div>
        <div className="col-4">
          <strong>{totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </>
  );

  const listCartItem = cart.map((item, i) => (
    <div className="row" key={item.id}>
      <div className="col-12 col-md-4 offest-md-2">
        <img
          src={item.image}
          alt={item.title}
          className=""
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "300px",
            maxHeight: "300px",
          }}
        />
      </div>
      <div className="col-12 col-md-6">
        <h5>{item.title}</h5>
        <button onClick={() => addProduct(item)}>+</button>
        <button onClick={() => delProduct(item)}>-</button>
      </div>
      <div className="col-4 text-right">
        {item.qty} * {item.price.toFixed(2)}
      </div>
    </div>
  ));

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-2 color-info">Cart Items</h2>
      {cart.length === 0 ? (
        <h5>
          Cart is empty, go to product or categories page to add your favourite
          fitness products
        </h5>
      ) : (
        listCartItem
      )}

      {cart.length !== 0 && cartSummary}
    </div>
  );
}

export default Cart;
