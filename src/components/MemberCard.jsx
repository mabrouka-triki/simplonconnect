

export default function MemberCard({ name, tech, message, imageUrl }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Technologie préférée : <strong>{tech}</strong></p>
            <p>"{message}"</p>
            <img src={imageUrl} alt="Une image" />

        </div>
    );
}









