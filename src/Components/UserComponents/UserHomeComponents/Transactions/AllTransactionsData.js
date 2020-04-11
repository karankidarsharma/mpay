import React from 'react'

function AllTransactionData(){
    return(
        <>
        <span className="spacer"></span>
        <tr className="strip-2" >
        <td className='table-title-all'>PID122</td>
        <td className='table-title-all'>$800</td>
        <td className='table-title-all'>$500</td>
        <td className='table-title-all'>$300</td>
        <td className='table-title-all col-2'>2020-06-23 20:35 AM</td>
        <td className='table-title-all'>MPAY123</td>
        <td className='table-title-all'>
            <div className="row">
                <div className="col-7">COMPLETE</div>
               
                <div className="col-5 text-rt"><span className="green-dot"></span></div>
            </div>
        </td>
        <td className='table-title-all col-1'>DETAILS</td>
        <td className='table-title-all'><button className="btn btn-blue">VIEW</button></td>
        </tr>
        <span className="spacer"></span>
        </>
    )
}

export default AllTransactionData