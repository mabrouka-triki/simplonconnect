import './App.css'
import MemberCard from './components/MemberCard';



function App() {
  return (
    <div>
      <h1>Les membres</h1>
      <div>
        <h2>Liste des membres</h2>
        <div className='cards-container'>
          <MemberCard 
            firstName="Inès" 
            lastName="Dupont" 
            tech="React" 
            message="Toujours partante pour un nouveau challenge frontend !" 
          />

          <MemberCard 
            firstName="Liam" 
            lastName="Nguyen" 
            tech="Laravel" 
            message="Le back c’est ma passion, mais j’apprivoise React petit à petit." 
          />

          <MemberCard 
            firstName="Amina" 
            lastName="Benali" 
            tech="Vue.js" 
            message="Pro du CSS, j’adore soigner les détails visuels." 
          />

          <MemberCard 
            firstName="Noé" 
            lastName="Durand" 
            tech="Node.js" 
            message="Le JS côté serveur, c’est mon truc. Je suis ici pour monter en fullstack." 
          />

          <MemberCard 
            firstName="Clara" 
            lastName="Morel" 
            tech="Python" 
            message="J’ai un faible pour les API propres et bien documentées." 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
