import React, {useState} from 'react'; 
import {NavLink} from "react-router-dom"


function UserNav(props) {
  
    return (

        <div onClick={ props.navName }>
       
       <NavLink exact activeClassName="nav-active" className="nav" to={props.link}>{props.itemName}</NavLink>
       
             
       
        
        
        </div>
    )
}

export default  UserNav