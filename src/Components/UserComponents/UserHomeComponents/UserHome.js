import React from 'react'
import AccountInfo from './AccountInfo'
import RecentTransactions from './RecentTransactions'

function UserHome(){
    return(
        <>
            <div className='row my-1 row-baseline'>
                <div className='col-4 text-ct card'><AccountInfo/></div>
                <div className='col-8 text-ct mg-lt card'><RecentTransactions/></div>                 
            </div>
            <div className='row my-1 row-baseline'>
                <div className='col-4 text-ct card'><AccountInfo/></div>
                <div className='col-8 text-ct mg-lt card'><RecentTransactions/></div>                 
            </div>
        </>
    )
}

export default UserHome