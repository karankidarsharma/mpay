import React from 'react'

function InfoBar(){
    return(
        <div className='row infoBar text-rt col-12'>
              <div className='row col-11 text-rt col-12 infoBar-icon'>
                 
                        <div className="info-icon"><i class="fas fa-envelope"></i></div>
                        <div className="info-icon"><i class="fas fa-bell"></i></div>
                        <div className="info-icon"><i class="fas fa-cog"></i></div>
                        <div className="info-icon"> <i class="fas fa-question-circle"> </i></div>
                
              </div>
             
        </div>
    )
}

export default InfoBar