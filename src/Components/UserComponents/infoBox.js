import React from 'react';

function InfoBox(){
    return(
        <div className='row infoBox' >
            <div className='col-6 font-22'>
                <p><b className='bold '>Welcome</b> Karan,</p>
                <p><b className='bold'>User ID:</b> #MPAY1234</p>
            </div>
            <div className='col-6 text-ct'>
           <p> <i class="fas fa-dollar-sign"></i> <span className='bold font-22'>500</span><sub>(USD)/Current Bal</sub></p>
            </div>
        </div>
    )
}
export default InfoBox