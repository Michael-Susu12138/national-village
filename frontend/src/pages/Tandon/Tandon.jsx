import "./Tandon.css";

import React from "react";
import Nav from "../../components/Nav/Nav";
import Alert from "../../components/Alert/Alert";
import Card from "../../components/Card/Card";

const Tandon = () => {
  return (
    <>
      <Alert></Alert>
      <Nav></Nav>
      <div>
        <h1> Discounts Near Tandon </h1>
        <Card
          name="Test"
          discount={0.1}
          summary="this is a summary"
          rating={3.5}
          location="343 Gold Street"
          tags={["technology", "someTag"]}
          imgURL="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
        ></Card>
      </div>
    </>
  );
};

export default Tandon;
