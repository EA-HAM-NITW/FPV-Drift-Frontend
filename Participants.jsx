import './Participants.css';

export default function Participants(players) 
{  
    return(
    <div className="individual">   
    <h2 className="individual_name" >{players.title}</h2>
    <h2 className="individual_points">{players.points}</h2>
    </div> 
    ); 

}