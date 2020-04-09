import React from 'react'


function Banner(props){
const url = 'images/mutepay_home_bg.png';
    return(
        <div style={{backgroundImage:`url(${url})`}} className="col-12 home-banner">
            <div className="col-12 text-rt banner-heading">
                <h2 className='heading-fonts'>{props.heading[0]}{props.heading[1]}{props.heading[2]}</h2>
            </div>
            <div>
                <h3 className='tagline'>{props.tagline}</h3>
            </div>
        </div>
    )
}

export default Banner