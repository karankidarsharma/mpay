import React from 'react'

function TableHeading(props){
   return(
       <div className='tableHeadig bold'>
           {props.title}
       </div>
   )
}

export default TableHeading