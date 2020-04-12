import React, {useState} from 'react'; 
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"


function UserNav(props) {
    const [inActive, setinActive] = useState('userNavItem')
    return (

        <div className={inActive} onClick={ props.navName }>
       
         <Link to={props.link}><li >{props.itemName}</li></Link>
             
       
        
        
        </div>
    )
}

export default  UserNav