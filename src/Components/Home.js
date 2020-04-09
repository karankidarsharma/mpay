import React from 'react'
import {Banner, Box, LowerBanner} from './HomeComponents'
import Grid from './Grid'

class Home extends React.Component{
    render(){
        return(
            <>
            <Banner heading={["MUTEPAY A WORLD CLASS",<br/>, "ESCROW SERVICE"]} tagline="Never Loose your money again"/>
            <div className="row">
                <Box class='box-left'  heading='ALWAYS PUT YOUR MONEY IN SAFE HANDS' 
                     info="Lorem Ipsum is simply dummy text of 
                           the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard 
                           dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to
                            make a type specimen book. "
                />
                <Box class='box-right'
                     heading='ALWAYS PUT YOUR MONEY IN SAFE HANDS' 
                     info="Lorem Ipsum is simply dummy text of 
                           the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard 
                           dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to
                            make a type specimen book. "
                />
               
            </div>
            <div className='col-12 home_boy'><img src='images/home_boy.png'/></div>
            <div className='triangle'></div>
            <LowerBanner/>

         
            
            </>
            
        )
    }
}

export default Home