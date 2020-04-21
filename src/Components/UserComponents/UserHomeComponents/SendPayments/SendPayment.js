import React, {useState} from 'react'
import TableHeading from '../ComponentsItems/TableHeading' 
import Form from'./Form'
import CheckPayment from './CheckPayment'



class SendPayments extends React.Component{
    constructor(props){
        super()
        this.state = {
            check : true,
            email : "",
            percentage : "",
            amount : "",
            error : ""


        }
        this.nextStep = this.nextStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
// this.nextStep()
    }
  nextStep(e){
      
    
          if(this.state.email == "" || this.state.percentage == "" || this.state.amount == ""){
            this.setState((state, props) => ({error :"ERROR"})
            
            )
          }else{
            this.setState((state, props) => ({check :false , error : ""}))
          }
          e.preventDefault()
          }
// fetch the value of form
handleChange(event){
    const {name, value} = event.target;

   this.setState({
       [name]: value
   })
}
   

render(){
    return( 
        <div>
            
         {this.state.error}
                
                { this.state.check?  <Form proceed={this.nextStep} onChange={this.handleChange}/> : <CheckPayment email={this.state.email} percentage={this.state.percentage} amount={this.state.amount}/>}           
                {/* <CheckPayment/> */}
        </div>   
        
    )
}
}

export default SendPayments