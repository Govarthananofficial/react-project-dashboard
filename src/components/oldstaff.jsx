import React from 'react'
import"./oldstaff.css";

const Oldstaff=()=>{
  return (
    <div class="building">
        <h3 id="row1">Old Staff Details</h3>
        <br></br>
        <p>
            Name:{""}
            {localStorage.getItem("Name")
        ?localStorage.getItem("Name")
    :"NA"}
        </p>
        
        <br></br>
        <p>
            Address: {""}
            {localStorage.getItem("Address")
            ?localStorage.getItem("Address"):"NA"}
    
        </p>
        
        <br></br>
        <p>
            PhoneNo: {""}
            {localStorage.getItem("PhoneNo")
            ?localStorage.getItem("PhoneNo"):"NA"}
        </p>
        
        <br></br>
        <p>
            Email: {""}
            {localStorage.getItem("Email")
            ?localStorage.getItem("Email"):"NA"}
        </p>
        
        <br></br>
        <p>
            AdharNo: {""}
            {localStorage.getItem("AdharNo")
            ?localStorage.getItem("AdharNo"):"NA"}
        </p>
        
        <br></br>
        <p>
            PanNo: {""}
            {localStorage.getItem("PanNo")
            ?localStorage.getItem("PanNo"):"NA"}
        </p>
        
        <br></br>
        <p>
            Aggrement: {""}
            {localStorage.getItem("Aggrement")
            ?localStorage.getItem("Aggrement"):"NA"}
        </p>
        
        <br></br>
        <p>
           Status: {""}
            {localStorage.getItem("Status")
            ?localStorage.getItem("Status"):"NA"}
        </p>
    </div>
    
  );
}

export default Oldstaff;