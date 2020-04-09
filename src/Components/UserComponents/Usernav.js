import React, {useState} from 'react';

function UserNav(props) {
    const [inActive, setinActive] = useState('userNavItem')
    return (

        <div className={inActive} onClick={ props.navName }>
        <li >{props.itemName}</li>
        
        </div>
    )
}

export default  UserNav