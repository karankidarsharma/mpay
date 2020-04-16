import React from 'react'

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    
    render(){
        return(
            
                <form>
                    {/* <div className="col-12 text-ct"><img width="50%" src="/images/mutepay.png" alt="MUTEPAY"/></div> */}
                    
                    <h2 className="text-ct recv-form-heading my-1"><i class="fas fa-funnel-dollar"></i> Enter Receivers Details</h2>
                    <input className="payment-fields" type="email" name="email" placeholder="RECEIVER EMAIL" />
                    <select className="payment-fields" name="percentage">
                        <option>SELECT PERCENTAGE</option>
                        <option value="0">NO INITAIL PAYMENT</option>
                        <option value="20">SEND 20%</option>
                        <option value="40">SEND 40%</option>
                        <option value="50">SEND 50%</option>
                        <option value="100">MAKE FULL PAYMENT</option>
                    </select>
                    <input className="payment-fields" type="number" name="amount" placeholder="ENTER AMOUT"/>
                    
                    <button className="send-btn hover">NEXT <i class="fas fa-arrow-circle-right"></i></button>
                </form>
           
        )
    }
}

export default Form