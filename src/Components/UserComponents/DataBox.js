import React from 'react'
import UserHome from './UserHomeComponents/UserHome'
import Transactions from '../UserComponents/UserHomeComponents/Transactions/Transactions'
class DataBox extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(

            <>
               <div className="dataBox">
                    {/* <UserHome/> */}
                    <Transactions/>
                </div>
            </>
        )
    }
}

export default DataBox