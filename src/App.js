import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";


import {useSelector} from 'react-redux'


function App() {
  const isLoged  =  useSelector((state)=>{return state.Auth.isloged})


  return (
    <div className="App">
      {!isLoged  && <Auth/> }
      {isLoged  && <Layout/> }
      {/* <Auth /> */}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
