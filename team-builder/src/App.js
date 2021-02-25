import React, {useState} from 'react'
import './App.css';
import Forms from './Forms'
import teamInfo from './teamInfo'


function App() {
  const [teamMembers, setTeamMembers] = useState(teamInfo)
  //console.log('team members', teamMembers)

  return (
    <div className="App">
      <h1>Welcome to Team Builder!</h1>
      {teamMembers.map((member, index) => {
        return <Forms key={index} member={member} />
      })}
    </div>
  );
}



export default App;
