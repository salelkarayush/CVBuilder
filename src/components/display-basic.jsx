export default function AboutYouDisplay ({ data }) {
    return (
        <div className="about-display">
            <h1>Basic information</h1>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.phoneNumber}</p>
        </div>
    )
}