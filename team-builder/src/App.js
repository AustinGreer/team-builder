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
      {teamMembers.map((member, index) => {
        return <Forms key={index} member={member} />
      })}
      <form>
        <label>
          Name:
          <input
            type='text'
          />
        </label> <br />

        <label>
          Email:
          <input
            type='text'
          />
        </label> <br />

        <label>
          Role:
          <input
            type='text'
          />
        </label> <br />

        <input
          type='submit'
        />
      </form>
    </div>
  );
}



export default App;
