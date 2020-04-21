import React from 'react'
import { Home, Navbar, Banner , UserHome} from './Components'
import {Route, Switch} from "react-router-dom"



class App extends React.Component{
    
    render(){
        
        return(

            <div >
            <Switch >
              <Route exact path="/">                  
                <Home/>
             </Route>
            <Route path="/user">
                   <UserHome/>
            </Route>
            </Switch>
                
            </div>
        )
    }
}

export default App