import React from 'react'
import TableHeading from '../ComponentsItems/TableHeading' 
import Form from'./Form'

function SendPayments(){
    return(
        <div>
            {/* <TableHeading title="SEND PAYMENT" /> */}
                
                <div className="col-4 form-holder">
                    <h2 className="recv-form-title text-ct">SEND PAYMENT</h2>
                    <Form/>
                </div>
            
        </div>
    )
}

export default SendPayments