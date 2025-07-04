import './App.css'
import React, { useState, useEffect } from "react";
import MemberCard from './components/MemberCard';
import MemberForm from './components/MemberForm';
import { members as initialMembers } from './data/members.js';

function App() {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem('members');

    // Si localStorage vide, on initialise
    if (!savedMembers) {
      localStorage.setItem('members', JSON.stringify(initialMembers));
      return initialMembers;
    }

    // Sinon on récupère les membres stockés
    return JSON.parse(savedMembers);
  });
  // const [searchInput, setSearchInput] = useState('');

  // useEffect(() => {
  //   const stored = JSON.parse(localStorage.getItem('members'));
  //   const tout = [...initialMembers, ...stored];
  //   setMembers(tout);
  // }, [])
  // Fonction pour ajouter un membre (passée à MemberForm)
  const addMember = (newMember) => {
    const memberLocal = { ...newMember, id: Date.now(), source: 'local' };
    setMembers(prevMembers => [...prevMembers, memberLocal]);
    const stored = JSON.parse(localStorage.getItem('members')) || [];
    const updatedMember = [...stored, memberLocal];
    localStorage.setItem('members', JSON.stringify(updatedMember));
  };
  const removeMember = (id) => {
    const updatedMembers = members.filter(member => member.id !== id);
    setMembers(updatedMembers);
    localStorage.setItem('members', JSON.stringify(updatedMembers));
  };
  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   APIData.filter((item) => {
  //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //   })
  // }

  return (
    <div>
      <h1>Les membres</h1>
      <div>
        <h2>Ajouter un memebre</h2>
        <div>
          <MemberForm onAddMember={addMember} />
        </div>
      </div>
      <div>
        <h2>Liste des membres</h2>
        {/* <Input icon='search'
          placeholder='Search...'
          onChange={(e) => searchItems(e.target.value)}
        /> */}
        <div className='cards-container'>
          {members.map((member) => (
            <MemberCard
              key={member.id}
              name={`${member.firstName} ${member.lastName}`}
              tech={member.tech}
              message={member.message}
              imageUrl={member.imageUrl}
              onDelete={() => removeMember(member.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       <h1>Les membres</h1>
//       <div>
//         <h2>Liste des membres</h2>
//         <div className='cards-container'>
//           {members.map((member, index) => (
//             <MemberCard
//               key={index}
//               name={`${member.firstName} ${member.lastName}`}
//               tech={member.tech}
//               message={member.message}
//               imageUrl={member.imageUrl}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
