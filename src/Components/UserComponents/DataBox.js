import React from 'react'
import HomeForUser from './UserHomeComponents/HomeForUser'
import Transactions from '../UserComponents/UserHomeComponents/Transactions/Transactions'
import SendPayment from '../UserComponents/UserHomeComponents/SendPayments/SendPayment'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
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

               
                <Switch>
                    <Route path="/user" exact>
                        <HomeForUser/>
                    </Route>
                    <Route path="/user/transactions" exact >
                        <Transactions/>
                    </Route>
                    <Route path="/user/sendpayment" exact >
                        <SendPayment/>
                    </Route>
                    {/* <Route path="/user/requestpayment" exact>
                        <RequestPayment/>
                    </Route>
                    <Route path="/user/disputes" exact>
                        <Disputes/>
                    </Route> */}
                </Switch>
                
          

                    {/* <UserHome/> */}
                    {/* <Transactions/> */}
                    {/* <SendPayment/> */}
                </div>
            </>
        )
    }
}

export default DataBox