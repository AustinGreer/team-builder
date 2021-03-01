import React, {useState} from 'react'
import './App.css';
//import Forms from './Forms'
import TeamMember from './TeamMember'
import teamInfo from './teamInfo'

const initialValues = {
  name: '', 
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(teamInfo)
  const [values, setValues] = useState(initialValues)
  
  // onChange function
  const updateTeam = (event) => {
    const {name, value } = event.target
    
    setValues({...values, [name]: value})
  }

  //submit handler function
  const addMember = (event) => {
    event.preventDefault()
    
    const newTeamMember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role.trim(),
    }

    setTeamMembers(teamMembers.concat(newTeamMember))
    setValues(initialValues)
  }

  return (
    <div className="App">
      <h1>Welcome to Team Builder!</h1>
      <form onSubmit={addMember}>
        <label>
            Name:
            <input
                name='name'
                type='text'
                onChange={updateTeam}
                value={values.name}
            />
        </label> <br />

        <label>
            Email:
            <input
                name='email'
                type='text'
                onChange={updateTeam}
                value={values.email}
            />
        </label> <br />

        <label>
            Role:
            <input
                name='role'
                type='text'
                onChange={updateTeam}
                value={values.role}
            />
        </label> <br />

        <input type='submit' />
        </form>

      {teamMembers.map((member, index) => {
        return( 
        <TeamMember key={index} info={member} />
        )
      })}

    </div>
  );
}

export default App;
