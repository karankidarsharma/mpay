import React from 'react'

function AllTransactionData(props){
    return(
        
        <tr className="strip-2">
        <td className='table-title-all'>{props.transactionId}</td>
    <td className='mh table-title-all'>${props.totalAmount}</td>
    <td className='mh table-title-all'>${props.amountPaid}</td>
    <td className='mh table-title-all'>${props.amotRemaining}</td>
    <td className='mh table-title-all col-2'>{props.date}</td>
    <td className='mh table-title-all'>{props.type == "MPAY123"?"RECEIVED":"SENT"} {props.receiverId}</td>
        <td className='mh table-title-all'>
            <div className="row">
                <div className="col-7">{props.status?"COMPLETE":"INCOMPLETE"}</div>
               
                <div className="col-5 text-rt">
                    {props.status?<span className="green-dot"></span>:<span className="red-dot"></span>}
                </div>
            </div>
        </td>
        <td className='table-title-all col-1'>DETAILS</td>
        <td className='table-title-all'><button className="btn btn-blue btn-view">VIEW</button></td>
        </tr> 
       
    )
}

export default AllTransactionData