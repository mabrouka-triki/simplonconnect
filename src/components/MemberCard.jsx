
import { useState } from 'react';
import Badge from './Badge'

export default function MemberCard({ name, tech, message, imageUrl, onDelete }) {
    const [inverted, setInverted] = useState(false);

    // Si inversé, on échange les couleurs
    const color = inverted ? '#f8fafc' : ' #dc2626';
    const backgroundColor = inverted ? ' #dc2626' : '#f8fafc';

    const handleDeleteMember = (member) => {
        if (confirm('êtes-vous sûr de vouloir supprimer ')) {
            return onDelete();
        }
    };

    return (
        <div className="card"
            onClick={() => setInverted(!inverted)}
        >
            <h2>{name}</h2>
            <Badge
                color={color}
                backgroundColor={backgroundColor}
            >
                {tech}
            </Badge>
            <p className='lastP'>"{message}"</p>
            <img src={imageUrl} alt="Une image" />
            <button
                onClick={handleDeleteMember}
            >
                Supprimer
            </button>
        </div>
    );
}

// export default function MemberCard(props) {
//     return (
//         <div className="card">
//             <h2>{props.name}</h2>
//             <p>Technologie préférée : <strong>{props.tech}</strong></p>
//             <p>"{props.message}"</p>
//             <img src={props.imageUrl} alt="Une image" />

//         </div>
//     );
// }








