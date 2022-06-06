import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
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
      {/* Code here */}

      {showdata.map((p) => (
        <div key={p.id}>
          <div>
            Product Name : {p.name}
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
