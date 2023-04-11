import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getallProducts} from "../service/api";

function ProductDetail2() {
    const { id } = useParams();
    const [data, setData] = useState({});
  const getProduct = async () => {
      try {
        const res = await getallProducts(id);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getProduct();
    }, []);
  
    
  return (
    <div>
      {Object.keys(data).length !== 0 ? (
        <div>{data.name}</div>
      ) : (
        <p>The product doesn't exist</p>
      )}
    </div>
  );
}
  

export default ProductDetail2;
