import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//action
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    let response = await axios.get('http://localhost:8080/Products');
    response = response.data
    // console.log(response);
    return response;
})

//action add
export const addProduct = createAsyncThunk('addProducts', async () =>{
    let response = await axios.post('http://localhost:8080/Product');
    return response
})


const productSlice = createSlice ({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading =true
        }) 

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.data = action.payload 
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        }) 
        builder.addCase(addProduct.pending, (state, action) => {
            state.isLoading =true
        }) 

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.data = [] 
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }
})


export default productSlice.reducer