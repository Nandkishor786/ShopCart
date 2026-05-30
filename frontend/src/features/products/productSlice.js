import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", 
    async ()=>{
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        console.log(res.data);
        return res.data;
    }
);

const initialState = {
       products:[],
       loading:false,
       error:null,
}

const productSlice =  createSlice({

    name:"productSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //pending
        .addCase(
            fetchProducts.pending,
            (state)=>{
                state.loading=true;
            }
        )
        //fulfilled
        .addCase(fetchProducts.fulfilled,
            (state,action)=>{
             state.loading = false;
             state.products  =action.payload;
            }
        )
        //rejected
        .addCase(fetchProducts.rejected,
            (state,action)=>{
                state.loading =false;
                state.error = action.error.message;
            }
        )
    }

})


export default productSlice.reducer;