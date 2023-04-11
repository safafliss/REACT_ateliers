import React, { useState } from "react";
import { addProduct } from "../service/api";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    img: "",
  });
  const { name, description, price, quantity, img } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onFileHandle = (e) => {
    setForm({
      ...form,
      img: e.target.files[0].name,
    });
  };
  const handleClick = async () => {
    navigate("/p2");
    const response = await addProduct(form);
  };
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
            name="image"
            onChange={(e) => onFileHandle(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
