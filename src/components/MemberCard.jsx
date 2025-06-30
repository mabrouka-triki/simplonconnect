

export default function MemberCard({ firstName, lastName, tech, message }) {
    return (
        <div className="card">
            <h2>{firstName} {lastName}</h2>
            <p>Technologie préférée : <strong>{tech}</strong></p>
            <p>"{message}"</p>

        </div>
    );
}









