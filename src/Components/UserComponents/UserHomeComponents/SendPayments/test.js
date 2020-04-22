import React from 'react'
import { useParams } from 'react-router-dom'

export default function Lest() {
    let {slug} = useParams();
    return (
        <div>
            {slug}
            hello
        </div>
    )
}
