import React from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Context/productContext";
import { useContext } from "react";


export default function Products() {


  const productStyle = {
    width: "250px",
    height: "250px",
    margin: "20px",
    color: "white",
    textAlign: "center",
    backgroundColor: "blue",
  };

  const productsC= useContext(productContext)

  const products = productsC.map((p) => {
    return (
      <Link key={p.id} to={`/Products/productD${p.id}`}>
        <div style={productStyle}>
          <h2>{p.name}</h2>
        </div>
      </Link>
    );
  });

  return (
      <div
        style={{
          width: "80%",
          margin: "50px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        {products}
      </div>
  );
}
