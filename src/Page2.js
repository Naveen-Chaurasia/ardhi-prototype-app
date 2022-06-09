import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, Route, Router, useNavigate} from 'react-router-dom';
import "./style.css";



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
    <div className="page2">
    {/* <t>TITLE2</t>   */}
    <div className="page1_image2" id="pi2">                                                                        
      <img src="dashboard.png" height="700px" width="1500px"  onClick={() => imageClick()}/>
      {/* <Link to={{ pathname: "http://neodash.graphapp.io/" }} target="_blank" /> */}
    </div>
    {/* {isClicked? navigate('http://neodash.graphapp.io/'):renderForm}
    <t1>  <input type="submit"  name="view Dashboard"/></t1> */}
    </div>
   
  );
}

export default Page2;