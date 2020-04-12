import React from 'react'
import TableHeading from '../ComponentsItems/TableHeading'
import AllTransactionsData from './AllTransactionsData'
import userdata from '../../../userdata'

class AllTransactions extends React.Component{
    constructor(){
        super();
        this.state = {
            userData : userdata
        }
    }
    render(){
        console.log(userdata)
        const allTransactionsData = this.state.userData.map(U => <AllTransactionsData transactionId={U.transactionId} totalAmount={U.totalAmount} amountPaid={U.amountPaid} amotRemaining={U.amotRemaining} date={U.date} type={U.receiverId} status={U.status} dispute={U.dispute}  />)
        return(
           <div className="AllTranasactionsDataTable" >
    
              <table className='col-12 table-head text-ct'>
                  <thead>
                  <tr>
                  <th className='table-title table-title-flat table-title-all'>TRANSACTION ID</th>
                  <th className='mh table-title table-title-flat table-title-all'>TOTAL AMOUNT</th>
                  <th className='mh table-title table-title-flat table-title-all'>AMONT PAID</th>
                  <th className='mh table-title table-title-flat table-title-all'>AMOUNT REMAINING</th>
                  <th className='mh table-title table-title-flat table-title-all col-2'>DATE</th>
                  <th className='mh table-title table-title-flat table-title-all'>TYPE</th>
                  <th className='mh table-title table-title-flat table-title-all'>STATUS</th>
                  <th className='table-title table-title-flat table-title-all col-1'>DISPUTE</th>
                  <th className='table-title table-title-flat table-title-all'>DETAILS</th>
                  </tr>
                  </thead>
                  <tbody>
                   {allTransactionsData}
                   </tbody>
                  
              </table>
           </div>
        )
    }
}


export default AllTransactions