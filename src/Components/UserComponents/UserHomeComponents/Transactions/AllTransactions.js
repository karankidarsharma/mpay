import React from 'react'
import TableHeading from '../ComponentsItems/TableHeading'
import AllTransactionsData from './AllTransactionsData'

class AllTransactions extends React.Component{
    render(){
        return(
           <div className="AllTranasactionsDataTable" >
    
              <table className='col-12 table-head text-ct'>
                  <tr>
                  <th className='table-title table-title-flat table-title-all'>TRANSACTION ID</th>
                  <th className='mh table-title table-title-flat table-title-all'>TOTAL AMOUNT</th>
                  <th className='mh table-title table-title-flat table-title-all'>AMONT PAID</th>
                  <th className='mh table-title table-title-flat table-title-all'>AMOUNT REMAINING</th>
                  <th className='mh table-title table-title-flat table-title-all col-2'>DATE</th>
                  <th className='mh table-title table-title-flat table-title-all'>RECEIVER ID</th>
                  <th className='mh table-title table-title-flat table-title-all'>STATUS</th>
                  <th className='table-title table-title-flat table-title-all col-1'>DISPUTE</th>
                  <th className='table-title table-title-flat table-title-all'>DETAILS</th>
                  </tr>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
                   <AllTransactionsData/>
              </table>
           </div>
        )
    }
}


export default AllTransactions