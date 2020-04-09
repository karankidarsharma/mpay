import React from 'react'

function TransactionData(props){
    return(
        <div className='row row-baseline col-12 strip-2'>
                <div className='col-2 '>{props.id}</div>
                <div className='col-3 '>{props.sender}</div>
                <div className='col-3 '>{props.total}</div>
                <div className='col-3 '>
                      {props.date}
                </div>
                <div className='col-3 '>
                      {props.status?<a> <span className='green-dot'></span></a>: <a> <span className='red-dot'></span></a>}
                </div>
        </div>
    )
}

export default TransactionData