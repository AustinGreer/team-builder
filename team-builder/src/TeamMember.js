import React from 'react'

export default function TeamMember (props) {
    const {info} = props
    return (
        <div className='container'>
            <h3>{info.name}</h3>
            <h3>{info.email}</h3>
            <h3>{info.role}</h3>
        </div>
    )
}