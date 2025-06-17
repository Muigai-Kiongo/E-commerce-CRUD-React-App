import React, { useState } from "react";

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      name,
      price: Number(price),
      shortDescription,
      longDescription,
      image: image || "/images/template.jpg",
    });

    setName("");
    setPrice("");
    setShortDescription("");
    setLongDescription("");
    setImage("");
  };

  return (
    <div className="add-product-form">
      <Header />

      <h3>Add New Product</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          placeholder="Short Description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Long Description"
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
        />
        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
