import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addCart } from "../redux/index";
import { useDispatch } from "react-redux";

function Product(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(resp.data);
      console.log(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: "2px" }}>
          <Skeleton height={50} width={300} className="mb-2" />
          <Skeleton height={75} className="mb-2" />
          <Skeleton height={25} width={150} className="mb-2" />
          <Skeleton height={50} className="mb-2" />
          <Skeleton height={150} className="mb-2" />
          <Skeleton height={50} width={100} className="mb-2" />
          <Skeleton height={50} width={100} style={{ marginLeft: "6px" }} />
        </div>
      </>
    );
  };

  const dispatch = useDispatch();

  const addProduct = (product) => {
    return dispatch(addCart(product));
  };

  const ShowProduct = () => {
    return (
      <div className="row" key={product.id}>
        <div className=" col-12 col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="dispaly-5">{product.title}</h1>
          <p className="lead fw-bolder">
            rating {product.rating && product.rating.rate}
          </p>
          <i className="fa fa-star"></i>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark py-2 px-2"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 py-2 px-3">
            Go to cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-4">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default Product;
