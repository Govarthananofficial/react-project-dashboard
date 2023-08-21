import React, { useState } from 'react';
import"./newstaff.css";

function Newstaff()
{
    const[Name ,setno]=useState("");
    const[Address,setAddress]=useState("");
    const[PhoneNo ,setPhoneNo]=useState("");
    const[Email  ,setEmail]=useState("");
    const[AdharNo ,setAdharNo]=useState("");
    const[PanNo ,setPanNo]=useState("");
    const[Aggrement ,setAggrement]=useState("");
    const[Status ,setStatus]=useState("");
    const handleSubmit=()=>
    {
        if(Name==="")
        {
            alert("Name  is required");
        }
     else if(Address==="")
     {
        alert("address is required");
     }
        else if(PhoneNo==="")
        {
            alert("PhoneNo is required");
        }
        else if(Email==="")
        {
            alert("Email is required");
        }
        else if(AdharNo==="")
        {
            alert("AdharNo is required");
        }
        else if(PanNo==="")
        {
            alert("PanNo is required");
        }
        else if(Aggrement==="")
        {
            alert("Agreement is required");
        }
        else if(Status==="")
        {
            alert("Status is required");
        }
        else{
            localStorage.setItem("Name",Name);
            localStorage.setItem("Address",Address);
            localStorage.setItem("PhoneNo",PhoneNo);
            localStorage.setItem("Email",Email);
            localStorage.setItem("AdharNo",AdharNo);
            localStorage.setItem("PanNo",PanNo);
            localStorage.setItem("Aggrement",Aggrement);
            localStorage.setItem("Status",Status);

        }
    }
    return (
      
        <form class="build">
            <div class="owner">New Staff Details</div>
            <div class='name'>
                <label id="row">Name:</label>
                <input type="text" id="Name" onChange={(e)=>setno(e.target.value)}/>
                </div>
                <br></br>
                <div class='Address'>
                <label id="row">Address:</label>
                <input type="text" id="Address" onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <br></br>
                <div class='PhoneNo:'>
                <label id="row">PhoneNo:</label>
                <input type="text" id="PhoneNo" onChange={(e)=>setPhoneNo(e.target.value)}/>
                </div>
                <br></br>
                <div class='Email:'>
                <label id="row">Email:</label>
                <input type="text" id="Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <br></br>
                <div class='AdharNo:'>
                <label id="row">AdharNo:</label>
                <input type="text" id="AdharNo" onChange={(e)=>setAdharNo(e.target.value)}/>
                </div>
                <br></br>
                <div class='PanNo:'>
                <label id="row">PanNo:</label>
                <input type="text" id="PanNo" onChange={(e)=>setPanNo(e.target.value)}/>
                </div>
                <br></br>
                <div class='Aggrement:'>
                <label id="row">Aggrement:</label>
                <input type="text" id="Aggrement" onChange={(e)=>setAggrement(e.target.value)}/>
                </div>
                <br></br>
                <div class='Status:'>
                <label id="row">Status:</label>
                <input type="text" id="Status" onChange={(e)=>setStatus(e.target.value)}/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit" id="Submit">Submit</button>
              
        </form>
      
    );
    }

export default Newstaff;