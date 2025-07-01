export default function Badge({ tech, color, backgroundColor }) {
    return (
        <div>
            <p >
                <span
                    style={{
                        color: color,
                        fontWeight: 600,
                        background: backgroundColor,
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