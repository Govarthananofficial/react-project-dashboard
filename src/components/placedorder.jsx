import React from "react";
import"./placedorder.css";
const Placedorder =()=>
{
    return(
        <div class="buildingname">
         <h3>see placed orders</h3>
                <br></br>
         <p>
         Customer Name: {""}
             {localStorage.getItem("CustomerName")
        ?localStorage.getItem("CustomerName")
    :"NA"}
    </p>
    
    <br></br>
    <p>
            Mobile No: {""}
             {localStorage.getItem("Floors")
        ?localStorage.getItem("Floors")
    :"NA"}
    </p>
    
    <br></br>
    <p>
            Address: {""}
             {localStorage.getItem("Location")
        ?localStorage.getItem("Location")
    :"NA"}
    </p>

    <br></br>
    <p>
            Orders: {""}
             {localStorage.getItem("Orders")
        ?localStorage.getItem("Orders")
    :"NA"}
    </p>

    <br></br>
    <p>
            Oreder Type: {""}
             {localStorage.getItem("Owner")
        ?localStorage.getItem("Owner")
    :"NA"}
     
    </p>
                <br></br>
    </div>  
    );
       
}
export default Placedorder;