import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/Auth";
import "./Auth.css";


const Auth = () => {
  const userRef  = useRef()
  const passRef  = useRef()
  const login  = useDispatch()
  const handleSubmit=(e=>{
    e.preventDefault()
    const userName =  userRef.current.value
    const password =  passRef.current.value
    
    const values = {userName,password}
    login(
      authActions.login(values),
      
  )
  })
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" ref={userRef} id="id"  />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passRef} id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
