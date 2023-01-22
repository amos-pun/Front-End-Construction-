import React from "react";
import Navbar from "../Layout/Navbar";
import Display from "./Display";

const Data = () => {
  return (
    <div>
      <Navbar />
      <Display name={"Kishor"} address={"Kathmandu"} />
      <hr/>
      <Display name={"Moses"} post={"Manager"} />
    </div>
  );
};

export default Data;
