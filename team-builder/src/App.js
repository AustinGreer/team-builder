import React, {useState} from 'react'
import './App.css';
import Forms from './Forms'
import teamInfo from './teamInfo'

const initialValues = {
  name: '', 
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(teamInfo)
  const [values, setValues] = useState(initialValues)
  

  return (
    <div className="App">
      <h1>Welcome to Team Builder!</h1>
      <Forms teamMembers={teamMembers} values={values}/>

      {teamMembers.map((member, index) => {
        return <div className='container' key={index}>
          <h3>{member.name}</h3>
          <h3>{member.email}</h3>
          <h3>{member.role}</h3>
    </div>
      })}
    </div>
  );
}



export default App;
