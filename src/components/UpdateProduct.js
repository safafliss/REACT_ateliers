import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getallProducts, editProduct} from "../service/api";
function UpdateProduct() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({
        "id": id,
        "name" : "",
        "description" : "",
        "price" : 0,
        "quantity": 0,
        "img" : ""
    });
    const {name, description, price, quantity, img} = data;
    const getProductToUpdate = async () => {
        const res = await getallProducts(id);
        setData(res.data);
    }
    useEffect(()=> {
        getProductToUpdate();
    },[])
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        console.log("fffff" + e.target.name)
    }
    const handleClick = async () => {
        navigate("/p2");
        const response = await editProduct(id,data);
    }
    const onFileHandle = (e) => {
        setData({
            ...data,
            img: e.target.files[0].name
        })
        console.log(e);
    }
  return (
    <div>
        <form>
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="desc">Description:</label>
          <textarea
            type="text"
            className="form-control"
            id="desc"
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="image">Image:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="img"
            onChange={(e) => onFileHandle(e)}
          />
        </div>

        {/* <img src={img ? require(`../assets/images/${img}`): null} /> */}
        <button
          type="submit" 
          className="btn btn-default"
          onClick={() => handleClick()}
        >
          Upadate Product
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct