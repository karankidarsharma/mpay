import React from 'react';

function Navbar(){
    return(
        <div className='row nav-main col-12'>
            {/* Logo div */}
             <div  className='col col-3'>
                    <img className="logo" src="/images/mutepay.png" alt="MUTEPAY" />
             </div>

             <div  className='col col-6'>
                 <ul className="text-ct nav-pad-top">
                     <li className="nav-btn">HOME</li>
                     <li className="nav-btn">ABOUT</li>
                     <li className="nav-btn">PAYMENT</li>
                     <li className="nav-btn">CONTACT</li>
                     
                 </ul>
             </div>
             <div className='col col-3'>
                <ul className="text-lt nav-pad-top">
                   <li className="btn nav-btn btn-round btn-round-right">LOGIN</li>
                   <li className="btn nav-btn btn-round btn-round-left">JOIN</li>
                </ul>
             </div>
             
        </div>
    )
}

export default Navbar