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
        <h1> Discounts Near Tandon</h1>
        <Card></Card>
      </div>
    </>
  );
};

export default Tandon;
