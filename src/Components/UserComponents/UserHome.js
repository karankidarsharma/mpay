import React from 'react';
import Header from './Header'
import UserNav from './Usernav'
import InfoBar from './InfoBar'
import nav from '../testapi'
import DataBox from './DataBox'
import InfoBox from './infoBox'
class UserHome extends React.Component{
    constructor(){
        super();
        this.state = {
             myNav:nav
        }

        console.log(this.state.myNav)
        
    }
 navName(id) {
    console.log("Clicked"+id)
}

   render(){
    const myNav = this.state.myNav.map(N => <UserNav key={N.id} id={N.id} itemName={N.nav} navName={() => this.navName(N.id)}/>)
       return(
           <>
        <Header/>
        {/* <InfoBar/> */}
        <div className="row userNav text-ct">{myNav}</div>
        {/* <InfoBox/> */}
        
        <DataBox/>

           </>
       )
   }

}
export default UserHome