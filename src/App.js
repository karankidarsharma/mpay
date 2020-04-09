import React from 'react'
import { Home, Navbar, Banner , UserHome} from './Components'

class App extends React.Component{
    
    render(){
        
        return(
            <div >
                {/* <Navbar />
                <Home/> */}
                <UserHome/>
            </div>
        )
    }
}

export default App