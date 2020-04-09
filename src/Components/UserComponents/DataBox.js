import React from 'react'
import UserHome from './UserHomeComponents/UserHome'
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
                    <UserHome/>
                </div>
            </>
        )
    }
}

export default DataBox