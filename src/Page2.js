import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, Route, Router, useNavigate} from 'react-router-dom';
import "./style.css";

import Iframe from 'react-iframe'
import Footer from "./Footer";

function Page2() {
    const [isClicked, setIsClicked] = useState(false);
  // React States
  const navigate= useNavigate();
  const imageClick = () => 
 {
    setIsClicked(true);
    window.location.href = "http://localhost:3000/";
 }
 const renderForm = (
    
   <div> click on image</div>
  
  );
  
  return (
    // <div className="page2">
    // {/* <t>TITLE2</t>   */}
    // <div className="page1_image2" id="pi2">                                                                        
    //   <img src="dashboard.png" height="700px" width="1500px"  onClick={() => imageClick()}/>
    //   {/* <Link to={{ pathname: "http://neodash.graphapp.io/" }} target="_blank" /> */}
    // </div>
    // {/* {isClicked? navigate('http://neodash.graphapp.io/'):renderForm}
    // <t1>  <input type="submit"  name="view Dashboard"/></t1> */}
    // </div>
    <div className="app">
      <img src="logo.png" height="70px" width="70px" />
      <div className="page1_image">
    <div className="iframe">
    <Iframe
     url="https://bloom.neo4j.io/index.html?connectURL=neo4j%2Bs%3A%2F%2F6799f560.databases.neo4j.io&_ga=2.172551520.230755171.1655092750-1401971628.1655092750"
   // url="https://browser.neo4j.io/?connectURL=neo4j%2Bs%3A%2F%2Fneo4j%406799f560.databases.neo4j.io%2F&_ga=2.105062592.230755171.1655092750-1401971628.1655092750"
    
    width="1300px"
            height="600px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>

   </div>
   <Footer/>
   </div>
   </div>
  );
}

export default Page2;