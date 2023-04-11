import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import products1 from "../api/db.json";
import Product1 from "./Product1";
function Products2() {
  const [greeting, setGreeting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const buy = (product) => {
    product.quantity--;
    setShowMessage(true);
    setTimeout(()=>{
        setShowMessage(false);
    },2000);
  };

  useEffect(() => {
    setGreeting(true);
    setTimeout(() => {
      setGreeting(false);
    }, 3000);
  }, []);

  return (
    <Container style={{ marginTop: "30px" }}>
      {greeting && (
        <Alert variant="success">
          <Alert.Heading>
            Hey, Welcome To Our Shop <strong> MyStore </strong>{" "}
          </Alert.Heading>
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping
            experience!
          </p>
          <hr />
        </Alert>
      )}
      <Row>
        {products1.products.map((product, index) => (
          <Col md={4} key={index}>
            <Product1 product={product} buyFunction={buy} />
          </Col>
        ))}
      </Row>
      {showMessage && (
        <Alert style={{ marginTop: "30px" }} variant="primary">
          <p>You Bought an Item</p>
        </Alert>
      )}
    </Container>
  );
}

export default Products2;
