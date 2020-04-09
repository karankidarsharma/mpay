import React from 'react'

function Box(props) {
    return (
        <div className={props.class}>
            <h3 className="box-heading">{props.heading}</h3>
            <p className="box-info">{props.info}
            </p>
        </div>
    )
}

export default Box