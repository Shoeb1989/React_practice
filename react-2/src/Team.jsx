import { useState } from "react"

export default function Team(){

    const [team, seTeam] = useState(0); 

    const handleAdd = () => {

        const newteam = team + 1;
        seTeam(newteam);
         
    }

    const deleted = () => {
        const newteam2 = team - 1;
        seTeam(newteam2);
    }

  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
  }

return (
    <div style={teamStyle} >
        <h3>Player:{team}</h3>
        <button onClick={handleAdd} >Add</button> <br />
        <button onClick={deleted} >Remove</button>
    </div>
)

}