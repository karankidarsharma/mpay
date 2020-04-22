import React, {useState} from 'react'
import TableHeading from '../ComponentsItems/TableHeading' 
import Form from'./Form'
import CheckPayment from './CheckPayment'


const initialState = {
    check : true,
            email : "",
            percentage : "",
            amount : "",
            emailError : "",
            percentageError : "",
            amountError : ""


}
class SendPayments extends React.Component{
    constructor(props){
        super()
        this.state = initialState
        this.nextStep = this.nextStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
        const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        

       
    }

validate = () => {
           let  emailError = "";
           let  percentageError =  ""
           let  amountError = ""
        //    CHECKING EMAIL VALIDATION
           const email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(this.state.email)
           

           if(!email){
               emailError = "Invalid Email Address";
           }
           if(!this.state.percentage || this.state.percentage == "SELECT PERCENTAGE"){
               percentageError = "Please select the percentage"
           }
           if(!this.state.amount){
               amountError = "Please Enter a Valid amount"
           }

           
           if(emailError || percentageError || amountError){
            this.setState({emailError, percentageError, amountError})
            return false;
        }
           this.setState({emailError:false, percentageError:false, amountError:false})
           return true;
}


// this.nextStep()
    
  nextStep(e){
          e.preventDefault()
          const isValid = this.validate();
          if(isValid){ 
              this.setState({check:false})
            }
        }


// fetch the value of form
handleChange(event){
    const {name, value} = event.target;
    this.validate();

   this.setState({
       [name]: value
   })
}
   

render(){
    const errors = {
       emailError: this.state.emailError,
       percentageError: this.state.percentageError,
        amountError : this.state.amountError
    }
    return( 
        <div>
            
                <div className="text-ct">
                
                </div>
                
                { this.state.check?  <Form error={errors} proceed={this.nextStep} onChange={this.handleChange}/> : <CheckPayment email={this.state.email} percentage={this.state.percentage} amount={this.state.amount}/>}           
                {/* <CheckPayment/> */}
        </div>   
        
    )
}
}

export default SendPayments