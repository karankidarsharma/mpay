import React from "react"
import TableHeading from '../ComponentsItems/TableHeading'

class CheckPayment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // create a state here
            amount : this.props.amount,
            percentage : this.props.percentage
            

        }
    }

    
     
    
  
    render(){
        const percentAmount = this.state.amount * (this.state.percentage/100)
        
        const amountToPayNow = percentAmount
        const  amountToHold = this.state.amount - percentAmount
        return(
            <>
            
            <div className="col-7 div-ct">
                    <div className="col-10 div-ct">
                        {/* <TableHeading title="CONFIRM CHECKOUT" /> */}
                        <h2 className="recv-form-title text-ct">CONFIRM CHECKOUT</h2>
                    </div>
                    
                    <div className="col-10 div-ct bill ">
                   
                        <div className=" col-12 text-ct">
                             <img width="30%" src="/images/mutepay.png" alt="MUTEPAY"/>
                        </div>
                    
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">RECEIVER ID :</div>
                            <div className="col col-6 text-rt chkout-data">#MPAY1232</div>
                        </div>
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">RECEIVER NAME :</div>
                            <div className="col col-6 text-rt chkout-data">JACK DOE</div>
                        </div>
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">RECEIVER EMAIL : </div>
                        <div className="col col-6 text-rt chkout-data">{this.props.email}</div>
                        </div>
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">INITIAL TRANSFER :</div>
                            <div className="col col-6 text-rt chkout-data">{this.props.percentage}%</div>
                        </div>
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">AMOUNT :</div>
                            <div className="col col-6 text-rt chkout-data">${this.props.amount}</div>
                        </div>
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">AMOUNT TO PAY NOW : </div>
                            <div className="col col-6 text-rt chkout-data">${ percentAmount}</div>
                        </div>
                        <div className="row cp-receipt-bd" >
                            <div className="col bold col-6 text-lt chkout-data">AMOUNT ON HOLD :</div>
                            <div className="col col-6 text-rt chkout-data">${amountToHold}</div>
                        </div>
                        {/* total goes here */}
                        <div className="row " >
                            <div className="col col-8 text-lt"></div>
                            <div className="col col-4 cp-receipt-bd">
                                <div className="row">
                                <div className="col-6 bold text-lt">AMOUNT</div><div className="col-6"> $1000</div>
                                </div>
                                <div className="row">
                                <div className="col-6 bold text-lt">AMOUNT</div><div className="col-6"> $1000</div>
                                </div>
                                
                               
                                
                            </div>
                        </div>

                        
                    </div>
                    </div>
            </>
        )
    }
}

export default CheckPayment