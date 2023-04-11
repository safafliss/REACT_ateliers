import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
    useEffect(()=>{
        getProduct();
    },[data]);
  const getProduct = () => {
    products.forEach((element) => {
      if (element.id == id) {
        console.log(element);
        setData(element);
      }
    });
  };
  return <div>{data.name}</div>;
}

export default ProductDetail;
