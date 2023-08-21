import React from 'react'
import {  Link, Outlet } from 'react-router-dom';

function Place()
{
    return(
       
        <div class="header">
        <div class="Dash">
        <Link id="dash" to="/orders/placeneworders">place new orders</Link>
        </div>
        <br></br>
        <div class="own">
        < Link id="own" to="/orders/exitingorders">see exiting orders</Link>
        </div>
    <Outlet/>
      </div>
      
    );
}
export default Place;