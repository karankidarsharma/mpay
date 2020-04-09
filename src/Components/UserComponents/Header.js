import React from 'react'

function Header () {
    return (
        <div className='row userHeader'>
            <div className='col-6'><img className="logo-header" src="/images/mutepay.png" alt="MUTEPAY" /></div>
            <div className='col-6 text-rt'>
            <div className='row col-11 text-rt col-12 infoBar-icon'>
                 
                 <div className="info-icon"><i class="fas fa-envelope"></i></div>
                 <div className="info-icon"><i class="fas fa-bell"></i></div>
                 <div className="info-icon"><i class="fas fa-cog"></i></div>
                 <div className="info-icon"> <i class="fas fa-question-circle"> </i></div>
                 <a className="user-name">Hello Karan</a> <i class="fas fa-caret-down"></i>
         
       </div>
                {/* <p>Logout<i class="fas fa-sign-out-alt signout"></i> </p> */}
                
                
            </div>
        </div>
    )
}
export default Header