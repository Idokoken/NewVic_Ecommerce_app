import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//css section
const Wrapper = styled.div`
  .header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  img {
    object-fit: contain;
  }
`;

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  //let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        let resp = await fetch("https://fakestoreapi.com/products");
        let result1 = await resp.clone().json();
        let result2 = await resp.json();

        setData(result1);
        setFilter(result2);
        console.log(result1);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    //return () => (componentMounted = false);
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (product) => {
    const updatedProduct = data.filter((a, i) => {
      return a.category === product;
    });
    setFilter(updatedProduct);
  };

  const ShowProducts = () => (
    <>
      <div className="header button d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark me-2 mb-1"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2 mb-1"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2 mb-1"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2 mb-1"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2 mb-1"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      {filter.map((product, i) => {
        return (
          <div className="main col-12 col-md-3 col-l-4" key={i}>
            <div className="item card h-100 text-center p-4" key={product.id}>
              <img
                className="card-img-top"
                height="250px"
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 12)}
                </h5>
                <p className="card-text lead fw-bold ">${product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark "
                >
                  Buy now
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <Wrapper>
      <div className="container mt-5 py-5">
        <div className="row ">
          <div className="col-12 mb-5">
            <h2 className="display-6 fw-bolder text-center">Latest Product</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </Wrapper>
  );
}

export default Products;
