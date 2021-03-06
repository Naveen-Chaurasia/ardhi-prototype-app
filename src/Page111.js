import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, Route, Router, useNavigate} from 'react-router-dom';
import Footer from "./Footer";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";

////////////////to add neo4j api//////////

function Page1() {
    const [isClicked, setIsClicked] = useState(false);
    const [APIData, setAPIData] = useState([]);
  // React States
  const navigate= useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8091/Level0`).then((response) => {
      console.log(response.data._embedded.Level0[0]);
      setAPIData(response.data._embedded.Level0[0]);
    });
  }, []);

  const imageClick1 = () => 
 {
  window.location.href = "http://localhost:8110/visualization?username=admin&password=admin";
     // navigate('/Page2')
 //  window.location.href = "https://bloom.neo4j.io/index.html?connectURL=neo4j%2Bs%3A%2F%2F6799f560.databases.neo4j.io&_ga=2.105062592.230755171.1655092750-1401971628.1655092750";

 }

 const imageClick = () => 
 {
    setIsClicked(true);
    console.log("^^^^^^^^^^^^^^^^^");
    //window.location.href ="https://naveen.budibase.app/app_dev_naveen_77d34a3d02ab4aa2889411486d714cee#/home";
  // window.location.href = "http://localhost:3000/";
  window.location.href = "https://naveen.budibase.app/app/ardhi_lca#/loginpage";
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
                            <div5 className="imageandbutton">
                              <div6 className="imagecafe">
      <img  src="cafe1.png" height="400px" width="580px"  padding="5px" border-radius="10px"  onClick={() => imageClick()}/>
      </div6>
      <div4 className="buttn">
        
        
        <button class="button1" onClick={() => imageClick1()}>View LCA Graph</button>  
        <button class="button2" onClick={() => imageClick()}>View LCA Charts</button>
       
        <div4/>
        
        
        </div4>
                           </div5>
      <div className="table_button">
      <table className="Table1" >
      <caption >Ardhi LCA(1 Panel=160Kg)</caption>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Energy</td>
          <td>5.14kg CO??? Emission per kg of GFRP</td>
          {/* <td>{APIData.energy}kg CO??? Emission per kg of GFRP</td> */}
        </tr>
        <tr>
          <td>Toxicity</td>
          <td>80 DCB eq.</td>
          {/* <td>{APIData.water} DCB eq.</td> */}
        </tr>
        <tr>
          <td>CarbonEmission</td>
          {/* <td>{APIData.carbonEmission}kg CO??? Emission per kg of GFRP</td> */}
          <td>3.96kg CO??? Emission per kg of GFRP</td>
        </tr>
        <tr>
          <td>Water</td>
          {/* <td>{APIData.water}kg</td> */}
          <td>80 kg</td>
        </tr>
        <tr>
          <td>ReuseByRecycle%</td>
          {/* <td>{APIData.reuseByRecyclePercentage}%</td> */}
          <td>80%</td>
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
      
      
      {/* <div4 className="buttn">
        
        
      <button class="button1" onClick={() => imageClick1()}>View LCA Graph</button>  
      <button class="button2" onClick={() => imageClick()}>View LCA Charts</button>
     
      <div4/>
      
      
      </div4> */}
      
      </div>
      <table className="Table1" >
      <caption >Ardhi LCA(Carbon Fiber)</caption>
        <tr>
          {/* <th>Material</th> */}
          <th>Property</th>
          <th>Value</th>
        </tr>
        <tr>
          {/* <td>GFRP</td> */}
          <td>Energy</td>
          <td>0.8kg CO??? Emission per kg of CFRP</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>Toxicity</td>
          <td>1.49 DCB eq.</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>CarbonEmission</td>
          <td>48.085kg CO??? Emission per kg of CFRP</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>Water</td>
          <td>150 Kg</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>ReuseByRecycle%</td>
          <td>0%</td>
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
      <table className="Table1" >
      <caption >Ardhi LCA(Steel)</caption>
        <tr>
          {/* <th>Material</th> */}
          <th>Property</th>
          <th>Value</th>
        </tr>
        <tr>
          {/* <td>GFRP</td> */}
          <td>Energy</td>
          <td>****kg CO??? Emission per kg of GFRP</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>Toxicity</td>
          <td>**** DCB eq.</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>CarbonEmission</td>
          <td>****kg CO??? Emission per kg of GFRP</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>Water</td>
          <td>**kg</td>
        </tr>
        <tr>
          {/* <td></td> */}
          <td>ReuseByRecycle%</td>
          <td>****%</td>
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
      
    </div>
   
    {/* {isClicked? navigate('/Page2'):renderForm} */}
    {/* <div>  <input type="submit"  name="view Dashboard"/></div> */}
    <Footer/>
    </div>
   
  );
}

export default Page1;