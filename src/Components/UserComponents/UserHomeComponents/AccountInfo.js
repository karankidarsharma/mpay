import React from 'react'
import TableHeading from './ComponentsItems/TableHeading'
function AccountInfo(){
    return(
        <div >
            {/* Account information on user homepage  */}

             <TableHeading title='ACCOUNT INFORMATION'/>
             <div className='text-lf strip'>
                 <span className="bold">PAYPAL ID: </span>
                 <span>mearthkid@gmail.com</span>
             </div>
             <div className='text-lf strip'>
                 <span className="bold ">Email: </span>
                 <span>beforeblogging@gmail.com</span>
             </div>    
             
        </div>
    )
}

export default AccountInfo