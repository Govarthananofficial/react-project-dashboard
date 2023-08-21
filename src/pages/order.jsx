import React from 'react'
import {  Link, Outlet } from 'react-router-dom';

function Order()
{
    return(
       
        <div class="header">
        <div class="Dash">
        <Link id="dash" to="/products/newstaff">New Staff</Link>
        </div>
        <br></br>
        <div class="own">
        <Link id="own" to="/products/oldstaff">Old Staff</Link>
        </div>
    <Outlet/>
      </div>
      
    );
}
export default Order;