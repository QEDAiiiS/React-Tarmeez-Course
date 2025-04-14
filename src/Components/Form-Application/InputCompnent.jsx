
import "./form.css";


import React from "react";
import InputDetails from "./InputDetails";

export default function InputCompnent({inName, inFun, title}) {
  return (
    <div style={{width:'100%'}}>
      <label>{title}</label>

      <InputDetails inNamDetail={inName} inFunDetail={inFun}/>
      {/* <input
        type="text"
        value={inName}
        onChange={(event)=>{inFun(event)}}
      /> */}
    </div>
  );
}
