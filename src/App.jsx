import './App.css'
import MemberCard from './components/MemberCard';
import { members } from './data/members';



function App() {
  return (
    <div>
      <h1>Les membres</h1>
      <div>
        <h2>Liste des membres</h2>
        <div className='cards-container'>
          {members.map((member) => (
            <MemberCard
              key={JSON.stringify(member)}
              name={`${member.firstName} ${member.lastName}`}
              tech={member.tech}
              message={member.message}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
