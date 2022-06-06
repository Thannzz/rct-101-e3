import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // Note: this id should come from api

  let [showdata, setShowdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/products/");
      let data = await res.json();
      console.log(data);
      setShowdata(data);
    };
    getData();
  }, [id]);

  return (
    <div>
      {showdata.map((p) => (
        <div key={p.id}>
          <div data-cy={`product-${p.id}`}>
            <h3 data-cy="product-name">Name : {p.name}</h3>
            <h6 data-cy="product-description">Description : {p.description}</h6>
            <button data-cy="product-add-item-to-cart-button">
              Add to cart
            </button>
            <div>
              <button data-cy="product-increment-cart-item-count-button">
                Add +1
              </button>
              <span data-cy="product-count">
                {
                  // Count here from CartItems
                }
              </span>
              <button data-cy="product-decrement-cart-item-count-button">
                Remove -1
              </button>
              <button data-cy="product-remove-cart-item-button">
                {" "}
                Remove item
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
