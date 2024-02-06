import React, { useState } from "react";
import "./AddProducts.css";
import Button from "@mui/material/Button";
import SideBar from "../Dashboard/SideBar";



const AddProduct = () => {

  const [productData, setProductData] = useState({name: "", quantity: "", price: "", description: '', image: ""})

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
              
              onChange={()}
              name="image"
              style={{background: '#fff'}}
              required
            />
            
            <input
              type="text"
              placeholder="Name of Product"
              value={productName}
              onChange={}
              required
            />
            <input
              type="number"
              value={productQuantity}
              placeholder="Stock Quantity"
              onChange={}
              required
            />
            <input
              type="number"
              value={productPrice}
              placeholder="Price in Dollars"
              onChange={}
              required
            />
            <textarea 
            // rows="3" 
            // cols="60" 
            value={productDescription}
            className="description-area"
            placeholder="Description"
            onChange={}
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
  )
}

export default AddProduct


