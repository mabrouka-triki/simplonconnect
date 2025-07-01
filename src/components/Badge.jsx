export default function Badge({ tech, color, backgroundColor }) {
    return (
        <div>
            <p >
                <span
                    style={{
                        color: color,
                        fontWeight: 600,
                        background: backgroundColor,
                        borderLeft: `4px solid ${color}`, 
                        borderTop: `4px solid ${color}`,
                        borderRight: `0.5px solid ${color}`,
                        borderBottom: `0.5px solid ${color}`,
                        padding: '5%',
                        borderRadius: '6px',
                        fontSize: '1 rem',
                    }}>
                    {tech}
                </span>
            </p>
        </div>
    );
}