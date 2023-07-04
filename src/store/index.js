import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
const store  = configureStore({
    reducer:{
        reducerPath:Auth.reducer
        
    }
})
export default store