export default function Button({
    title="timeOfDay",
    color
}) {
    return(
        <button style={{backgroundColor: color}}>{title}</button>
    )
}