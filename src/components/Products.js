import { Component } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import products from "../products.json";
import Product from "./Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {  Greeting: false , showMessage :false };
  }
  buy = (product) => {
   product.quantity --;
   this.setState(() => ({
    showMessage: true,
      }));
   setTimeout(() => {
    this.setState({ showMessage: false });
   }, 2000);
  };
  componentDidMount() {
    console.log("I have finished rendering avec un état = " + this.state.Greeting);
    this.setState(() => ({
        Greeting: true,
    }));
    setTimeout(() => {
        this.setState({ Greeting: false });
      }, 3000);
  }
  componentDidUpdate() {
    console.log("I have been updated avec un état = " + this.state.Greeting);
  }
  componentWillUnmount() {
    console.log("I'm being destroyed");
  }

  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        {this.state.Greeting && (
          <Alert variant="success">
            <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
            <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
            </p>
            <hr />
          </Alert>
        ) 
        }
        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index}>
              <Product product={product} buyFunction={this.buy} />
            </Col>
          ))}
        </Row>
        {this.state.showMessage && (
        <Alert style={{ marginTop: "30px" }} variant="primary">
        <p>
        You Bought an Item
        </p>
      </Alert>
        ) 
        }
      </Container>
    );
  }
}

export default Products;