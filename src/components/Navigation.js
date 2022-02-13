import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "./logo.png";
const Navigation = () => {
  return (
    // style={{ background: "transperant" }}
    <Navbar bg='dark'>
      <Container >
        <Navbar.Brand>
          <img
            src={img}
            // className="d-inline-block align-top"
            style={{ height: "150px", width: "130px" }}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button
            style={{
              height: "50px",
              width: "100px",
              margin: "10px",
              padding: "10px",
              alignText: "center",
            }}
            variant="outline-success"
            as={Link}
            to={"/Login"}
          >
            Login
          </Button>
          <Button
            style={{
              height: "50px",
              width: "100px",
              margin: "10px",
              padding: "10px",
            }}
            variant="outline-primary"
            as={Link}
            to={"/Signup"}
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
