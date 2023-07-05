import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isloged:false
}
const Auth  = createSlice({
    name:"auth",
 initialState:initialState,
 reducers:{
    login(state){
    state.isloged = true
    },
    logOut(state){
        state.isloged = false
    },
}
})
export const authActions  =  Auth.actions
export default  Auth