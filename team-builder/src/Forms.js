import React from 'react'

export default function Forms (props) {
    const {member} = props
    
    
    return (
        <div className='container'>
            <h3>Name: {member.name}</h3>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
        </div>
    )
}