
import { useState } from 'react';
import Badge from './Badge'

export default function MemberCard({ name, tech, message, imageUrl }) {
    const [inverted, setInverted] = useState(false);

    // Si inversé, on échange les couleurs
    const color = inverted ? 'white' : 'red';
    const backgroundColor = inverted ? 'red' : 'white';

    return (
        <div className="card"
            onClick={() => setInverted(!inverted)}
        >
            <h2>{name}</h2>
            <Badge
                tech={tech}
                color={color}
                backgroundColor={backgroundColor} 
            />
            <p>"{message}"</p>
            <img src={imageUrl} alt="Une image" />

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







