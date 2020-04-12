import React, {useState} from 'react'; 
import {Link} from "react-router-dom"


function UserNav(props) {
  
    return (

        <div onClick={ props.navName }>
       
       <Link className="nav" to={props.link}>{props.itemName}</Link>
       
             
       
        
        
        </div>
    )
}

export default  UserNav