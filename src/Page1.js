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
  const imageClick1 = () => 
 {
      navigate('/Page2')
//     setIsClicked(true);
//     console.log("^^^^^^^^^^^^^^^^^");
//    window.location.href = "http://localhost:3000/";
//   //  window.location.href = "https://bloom.neo4j.io/index.html?connectURL=neo4j%2Bs%3A%2F%2F6799f560.databases.neo4j.io&_ga=2.105062592.230755171.1655092750-1401971628.1655092750";
//     console.log("^^^^^^^^^^^^^^^^^");
//   let x=  document.getElementsByClassName("MuiButton-label")[1].click();
  
//     //document.getElementsByClassName("MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSizeLarge MuiButton-sizeLarge").click();
// console.log("*********************");
//     //    let x= getElementByXpath("/html/body/div[2]/div[3]/div/div[2]/button[2]")    ;
    
 }

 const imageClick = () => 
 {
    setIsClicked(true);
    console.log("^^^^^^^^^^^^^^^^^");
   window.location.href = "http://localhost:3000/";
  //  window.location.href = "https://bloom.neo4j.io/index.html?connectURL=neo4j%2Bs%3A%2F%2F6799f560.databases.neo4j.io&_ga=2.105062592.230755171.1655092750-1401971628.1655092750";
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
                            
      <img  src="cafe1.png" height="500px" width="900px"  padding="10px" border-radius="10px"  onClick={() => imageClick()}/>
      <div className="table_button">
      <table className="Table1" >
      <caption >Ardhi LCA(1 Panel=160Kg)</caption>
        <tr>
          <th>Material</th>
          <th>Property</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>GFRP</td>
          <td>Energy</td>
          <td>5.14</td>
        </tr>
        <tr>
          <td></td>
          <td>Toxicity</td>
          <td>0.59ppmv</td>
        </tr>
        <tr>
          <td></td>
          <td>CarbonEmission</td>
          <td>8.3ppmv</td>
        </tr>
        <tr>
          <td></td>
          <td>Water</td>
          <td>80Kg</td>
        </tr>
        <tr>
          <td></td>
          <td>ReuseByRecycle%</td>
          <td>30%</td>
        </tr>
        {/* <tr>
          <td></td>
          <td>Location</td>
          <td>Manama</td>
        </tr> */}
        {/* <tr>
          <td onClick={() => imageClick1()}><button class="button button1">View Graph</button></td>
          <td></td>
          <td onClick={() => imageClick()}><button class="button button1">View Chart</button></td>
        </tr> */}
      </table>  
      <div4 className="buttn">
      <button class="button1" onClick={() => imageClick1()}>View LCA Graph</button>  
      <button class="button2" onClick={() => imageClick()}>View LCA Charts</button>
     
      <div4/>
      
      </div4>
      </div>
      
    </div>
    
    {/* {isClicked? navigate('/Page2'):renderForm} */}
    {/* <div>  <input type="submit"  name="view Dashboard"/></div> */}
    <Footer/>
    </div>
   
  );
}

export default Page1;