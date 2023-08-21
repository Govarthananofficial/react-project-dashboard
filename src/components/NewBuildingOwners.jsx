import React, { useState } from "react";
import"./NewBuildingOwners.css";
function NewBuildingOwners()
{
    const[BuildingName ,setBuildingName] =useState("");
    const[Floors, setFloors] =useState("");
    const[Owner ,setOwners]=useState("");
    const[Location ,setLocation]=useState("");
    const handleSubmit=()=>
    {
        
       if(BuildingName==="")
       {
        alert("Building Name is Required");
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
else{
    localStorage.setItem("BuildingName",BuildingName);
    localStorage.setItem("Floors",Floors);
    localStorage.setItem("Owner",Owner);
    localStorage.setItem("Location",Location)
}
    
    }
    return(
       
      
        <form >
            <div class="Box">
            <h1 id="h1">NewBuilding</h1>
            <br></br>
            <div class="b1">
            <label class="row2">Building Name/No:</label>
            <input type="text" id="BuildingName"onChange={(e)=>setBuildingName(e.target.value)}/>
            </div>
            <br></br>
            <div class="b2">
            <label class="row2">No.of Floors:</label>
            <input type="text" id="Floors" onChange={(e)=>setFloors(e.target.value)}/>
            </div>
            <br></br>
            <div class="b3">
            <label class="row2">Owner:</label>
            <select id="Owner" onChange={(e)=>setOwners(e.target.value)}>
            <option value="Please Select Here">Please Select Here..</option>
                <option value="Arun">dining</option>
                <option value="Jaga">take away</option>
                <option value="Jaga">delivery</option>
                </select>
            </div>
            <br></br>
            <div class="b4">
            <label class="row2">Location:</label>
            <input type="text" id="Location" onChange={(e)=>setLocation(e.target.value)}/>
            </div>
            <br></br>
            <br></br>
            <button type="submit"  onClick={()=>handleSubmit()} id="Submit">Submit</button>
            </div>
        </form>
    
    );
}
export default NewBuildingOwners;