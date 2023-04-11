import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../service/api";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
function Product3(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setLike] = useState(0);
  const addLikes = (e) => {
    e.preventDefault();
    setLike(like + 1);
  };
  const handleDelete = async () => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleteProduct(props.product.id);
      getAllProduct();
    }
  };
  const getAllProduct = async () => {
    await dispatch(fetchProducts());
  };
  return (
    <Card
      style={{ width: "18rem" }}
      border="secondary"
      className={`${like > 5 ? "bestProduct" : false}`}
    >
      <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + props.product.img)}
          alt="Product Img"
          height={200}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <Link to={`/detail/${props.product.id}`}>{props.product.name}</Link>
        </Card.Title>
        <Card.Text>Price : {props.product.price} DT</Card.Text>
        <Card.Text>Quantity :{props.product.quantity}</Card.Text>
        <Card.Text>Likes :{like}</Card.Text>
        {/* why state ??? */}
        <Row>
          <Col md={6}>
            {" "}
            <Button variant="primary" onClick={addLikes}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="info"
              onClick={() => props.buyFunction(props.product)}
            >
              Buy
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          {/* <Col md={6}>
            <Button variant="success" onClick={()=> {navigate(`/updateProduct/${props.product.id}`)}}>Update</Button>
          </Col> */}
          <Col>
            <Link to={`/updateProduct/${props.product.id}`}>Update</Link>
          </Col>
          <Col md={6}>
            <Button variant="warning" onClick={() => handleDelete()}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product3;
