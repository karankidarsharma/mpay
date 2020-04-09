import React from 'react';

function LowerBanner(){
    return(
       <div className='row lowerBanner'>
           <div className='col-5 lowerBanner-col'>
               <img className='lock-img' src="/images/lock.png"/>
           </div>
           <div className='col-7 lowerBanner-col font-os white'>
               <h3 className='LowerBanner-heading font-os white' >Mutepay Is One ofClutch.com’s Top B2B Companies</h3>
               <p className='LowerBanner-title my-1'>One thing to keep in mind is that nested serializers do not currently support write operations.
                  For writable representations, you should use regular ﬂat representations
               </p>
               <a className='LowerBanner-btn font-os white my-2 white'>READ MORE</a>
           </div>
       </div>
    )
}

export default LowerBanner