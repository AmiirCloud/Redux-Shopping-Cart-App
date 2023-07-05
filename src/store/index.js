import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
const store  = configureStore({
    reducer:{
        Auth:Auth.reducer
        
    }
})
export default store