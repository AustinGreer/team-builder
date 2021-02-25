import React from 'react'

export default function Forms (props) {
    const {member} = props
    
    
    return (
        <div>
            <div className='container'>
                <h3>{member.name}</h3>
                <h3>{member.email}</h3>
                <h3>{member.role}</h3>
            </div>

            
        </div>
    )
}