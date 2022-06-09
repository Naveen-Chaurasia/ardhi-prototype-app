import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, Route, Router, useNavigate} from 'react-router-dom';
import Footer from "./Footer";
import "./style.css";



function Page1() {
    const [isClicked, setIsClicked] = useState(false);
  // React States
  const navigate= useNavigate();

//   function getElementByXpath(path) {
//     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//   }
  const imageClick = () => 
 {
    setIsClicked(true);
    console.log("^^^^^^^^^^^^^^^^^");
    window.location.href = "http://localhost:3000/";
    console.log("^^^^^^^^^^^^^^^^^");
  let x=  document.getElementsByClassName("MuiButton-label")[1].click();
  
    //document.getElementsByClassName("MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSizeLarge MuiButton-sizeLarge").click();
console.log("*********************");
    //    let x= getElementByXpath("/html/body/div[2]/div[3]/div/div[2]/button[2]")    ;
    
 }
 const renderForm = (
    
   <div> click on image</div>
  
  );
  
  return (
    <div className="app">
        <img src="logo.png" height="100px" width="100px" />
    
    <div className="page1_image" id="pi">                                                                        
      <img  src="cafe1.png" height="500px" width="900px"  padding="10p0x" onClick={() => imageClick()}/>
    </div>
    {/* {isClicked? navigate('/Page2'):renderForm} */}
    {/* <div>  <input type="submit"  name="view Dashboard"/></div> */}
    <Footer/>
    </div>
   
  );
}

export default Page1;