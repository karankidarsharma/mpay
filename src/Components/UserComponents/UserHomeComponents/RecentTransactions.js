import React from 'react'
import TableHeading from './ComponentsItems/TableHeading'
import TransactionData from './ComponentsItems/TransactionData'
function RecentTransactions(){

      return(
          <div>
              <TableHeading title='RECENT TRANSACTIONS'/>
              <div className='row row-baseline col-12 table-head bold'>
                  <div className='table-title col-2 bold'>ID</div>
                  <div className='table-title col-3 bold'>SENDER ID</div>
                  <div className='table-title col-3 bold'>TOTAL AMOUNT</div>
                  <div className='table-title col-3 bold'>DATE</div>
                  <div className='table-title col-3 bold'>STATUS</div>
              </div>
              <TransactionData id="PID123" sender='MPAY125' total='$800' date="12/02/2020" status={false}/>
              <TransactionData id="PID552" sender='MPAY658' total='$500' date="12/02/2020" status={true}/>
              <TransactionData id="PID217" sender='MPAY234' total='$300' date="12/02/2020" status={true}/>
              <TransactionData id="PID225" sender='MPAY124' total='$600' date="12/02/2020" status={false}/>
              <div className="btn-div col-12 text-rt my-1">
                  <a className="btn btn-blue">VIEW ALL</a>
              </div>
             

              

          </div>
      )

}

export default RecentTransactions