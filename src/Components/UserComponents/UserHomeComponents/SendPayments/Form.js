import React from 'react'

function Form(props) {
  console.log(props.error)
   const {emailError, percentageError, amountError} = props.error

        return(
            <>
            <div className="col-4 form-holder">
               <h2 className="recv-form-title text-ct">SEND PAYMENT</h2>
                <form>
                    
                    {/* <div className="col-12 text-ct"><img width="50%" src="/images/mutepay.png" alt="MUTEPAY"/></div> */}
                    
                    <h2 className="text-ct recv-form-heading my-1"><i className="fas fa-funnel-dollar"></i> Enter Receivers Details</h2>
                    <input className="payment-fields" type="email" name="email" onKeyUp={props.onChange} onChange={props.onChange} placeholder="RECEIVER EMAIL" />
                    <p className="error">{emailError}</p>
                    <select className="payment-fields" onClick={props.onChange} name="percentage" onChange={props.onChange}>
                        <option>SELECT PERCENTAGE</option>
                        <option value="0">NO INITAIL PAYMENT</option>
                        <option value="20">SEND 20%</option>
                        <option value="40">SEND 40%</option>
                        <option value="50">SEND 50%</option>
                        <option value="100">MAKE FULL PAYMENT</option>
                    </select>
                    <p className="error">{percentageError}</p>
                    <input className="payment-fields" type="number" name="amount" onKeyUp={props.onChange} onChange={props.onChange} placeholder="ENTER AMOUT"/>
                    <p className="error">{amountError}</p>
                    <textarea className="payment-fields textarea" placeholder="ENTER DETAILS" maxLength="150" onChange={props.onChange} ></textarea>
                    <button className="send-btn hover" onClick={props.proceed}>NEXT <i className="fas fa-arrow-circle-right" ></i></button>
                </form>
               </div> 
            </>
           
        )
}

export default Form