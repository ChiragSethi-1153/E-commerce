import React, { useState } from "react";
import "./AddProducts.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SideBar from "../Dashboard/SideBar";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddProducts = () => {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files;
    setProductImage(file);
  };

  const handleUpload = () => {
    if (productImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileDataUrl = e.target.result;

        // Save the data URL in local storage
        localStorage.setItem("uploadedFile", fileDataUrl);

        console.log("File saved in local storage:", fileDataUrl);
      };

      reader.readAsDataURL(productImage);
    } else {
      alert("Please select a file before uploading.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let productsData = JSON.parse(localStorage.getItem("productsData"));

    if (productsData == null) {
      productsData = [];
      productsData?.push({
        productName,
        productQuantity,
        productPrice,
        productDescription,
        productImage
      });
      localStorage.setItem("productsData", JSON.stringify(productsData));
    } else {
      productsData?.push({
        productName,
        productQuantity,
        productPrice,
        productDescription,
        productImage
      });
      localStorage.setItem("productsData", JSON.stringify(productsData));
    }

    // setProductDescription(null)
    // setProductImage(null)
    // setProductName(null)
    // setProductPrice(null)
    // setProductQuantity(null)
  };

  return (
    <div className="add-product">
      <div className="addProduct-left">
        <SideBar />
      </div>

      

      <div className="addProduct-right">
      <h1>Add Your Product</h1>

        <form className="addProduct-form" onSubmit={handleSubmit}>
          
            {/* <label htmlFor="image" style={{position: 'relative', top: '2vh', left: '2vw'}}>Upload the Product Image</label> */}
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              placeholder="Upload the Product Image"
              onChange={handleFileChange}
              name="image"
              style={{background: '#fff'}}
              required
            />
            
            <input
              type="text"
              placeholder="Name of Product"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Stock Quantity"
              onChange={(e) => setProductQuantity(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Price in Dollars"
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
            <textarea 
            // rows="3" 
            // cols="60" 
            className="description-area"
            placeholder="Description"
            onChange={(e) => setProductDescription(e.target.value)}
            >
            </textarea>
            
          
          <Button 
          type="submit" 
          variant="contained" 
          className="addProducts-btn" 
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
