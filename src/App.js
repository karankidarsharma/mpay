import React from 'react'
import { Home, Navbar, Banner , UserHome} from './Components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class App extends React.Component{
    
    render(){
        
        return(

            <div >
                {/* <Navbar />
                <Home/> */}
                <Router>
                   <UserHome/>
                </Router>
                
            </div>
        )
    }
}

export default App