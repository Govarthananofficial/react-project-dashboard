import React, { useState } from "react";
import"./placeorder.css";
function Placeorder()
{
    const[CustomerName ,setCustomerName] =useState("");
    const[Floors, setFloors] =useState("");
    const[Owner ,setOwners]=useState("");
    const[Location ,setLocation]=useState("");
    const[Orders ,setOrders]=useState("");
    const handleSubmit=()=>
    {
        
       if(CustomerName==="")
       {
        alert("Customer Name is Required");
       }
       else if(Floors==="")
       {
        alert("Floor is required");
       }
       else if(Owner==="")
       {
        alert("Owner Is required");
       }
       else if(Location==="")
       {
        alert("Location is required")
       }
       else if(Orders==="")
       {
        alert("Orders is required")
       }
else{
    localStorage.setItem("CustomerName",CustomerName);
    localStorage.setItem("Floors",Floors);
    localStorage.setItem("Owner",Owner);
    localStorage.setItem("Location",Location)
    localStorage.setItem("Orders",Orders)
}
    
    }
    return(
       
      
        <form >
            <div class="Box">
            <h3 id="h1">Place New Orders</h3>
            <br></br>
            <div class="b1">
            <label class="row2">Customer Name:</label>
            <input type="text" id="CustomerName"onChange={(e)=>setCustomerName(e.target.value)}/>
            </div>
            <br></br>
            <div class="b2">
            <label class="row2">Phone No:</label>
            <input type="text" id="Floors" onChange={(e)=>setFloors(e.target.value)}/>
            </div>
            <br></br>
            <div class="b4">
            <label class="row2">Address:</label>
            <input type="text" id="Location" onChange={(e)=>setLocation(e.target.value)}/>
            </div>
            <br></br>
            <div class="b4">
            <label class="row2">Orders:</label>
            <input type="text" id="Orders" onChange={(e)=>setOrders(e.target.value)}/>
            </div>
            <br></br>
            <div class="b3">
            <label class="row2">Type:</label>
            <select id="Owner" onChange={(e)=>setOwners(e.target.value)}>
            <option value="Please Select Here">Please Select Here..</option>
                <option value="dien in">dien in</option>
                <option value="take away">take away</option>
                <option value="deleviery">deleviery</option>
                </select>
            </div>
            <br></br>
            <button type="submit"  onClick={()=>handleSubmit()} id="Submit">Submit</button>
            </div>
        </form>
    
    );
}
export default Placeorder;