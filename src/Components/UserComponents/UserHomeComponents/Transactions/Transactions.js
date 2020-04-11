import React from 'react'
import TableHeading from '../ComponentsItems/TableHeading'
import Filters from './Filters'
import AllTransactions from './AllTransactions'


class Transactions extends React.Component{
    render(){
        return(
            <div>
                <TableHeading title="ALL TRANSACTIONS"/>
                <Filters/>
                <AllTransactions/>

            </div>
        )
    }
}

export default Transactions