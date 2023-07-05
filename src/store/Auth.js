import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isloged:false
}
const  userName = "amir"
const password  ="123"
const Auth  = createSlice({
    name:"auth",
 initialState:initialState,
 reducers:{
    login(state,actions){
        console.log(actions.payload.userName)
        if(actions.payload.userName === userName  && actions.payload.password === password){
            state.isloged = true
        }else{
            console.log("invalid UserName or Password")
            state.isloged =  false
        }
    },
    logOut(state){
        state.isloged = false
    },
}
})
export const authActions  =  Auth.actions
export default  Auth