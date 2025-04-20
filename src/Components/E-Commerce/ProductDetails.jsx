


import React from "react";
import { productContext } from "../Context/productContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {


    let productContex= useContext(productContext)
    console.log(productContex);


    const {prdId} = useParams()
    console.log(prdId);
    
    let prd= productContex.find((p)=>{
        return p.id == prdId
    })

    console.log(prd);
    if (prd){
      return (
        <div style={{
            height: "89vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
        <div
          style={{
            width: "400px",
            backgroundColor: "blue",
            color: "white",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h1>{prd.name}</h1>
          <p>{prd.des}</p>
          <p>Product Countaty</p>
        </div>
        </div>
      );
    }else{
      return(
        <h1>The Product with ID: {prdId} is not exist</h1>
      )
    }
}
