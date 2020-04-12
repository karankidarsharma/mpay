import React from 'react'
import UserHome from './UserHomeComponents/UserHome'
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
                    <Route path="/" exact>
                        <UserHome/>
                    </Route>
                    <Route path="/transactions" exact>
                        <Transactions/>
                    </Route>
                    <Route path="/sendpayment" exact>
                        <SendPayment/>
                    </Route>
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