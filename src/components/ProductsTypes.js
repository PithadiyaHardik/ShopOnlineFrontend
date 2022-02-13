import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import electronics from "./electronics.jpg";
import furniture from "./furniture.jpg";
import clothing from "./clothing.jpg";
import stationary from "./stationary.jpg";
const ProductsTypes = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Card style={{ width: "200px", margin: "20px" }}>
        <Card.Img variant="top" src={electronics}></Card.Img>
        <Card.Body>
          <Card.Title>Electronics</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "200px", margin: "20px" }}>
        <Card.Img variant="top" src={clothing}></Card.Img>
        <Card.Body>
          <Card.Title>Clothing</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "200px", margin: "20px" }}>
        <Card.Img variant="top" src={furniture}></Card.Img>
        <Card.Body>
          <Card.Title>Furniture</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "200px", margin: "20px" }}>
        <Card.Img variant="top" src={stationary}></Card.Img>
        <Card.Body>
          <Card.Title>Stationary</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsTypes;
