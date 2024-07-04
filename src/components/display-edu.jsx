export default function AboutYouDisplay ({ data }) {
    return (
        <div className="edu-display">
            <h1>Educational Qualifications</h1>
            <h2>{data.scname}</h2>
            <p>{data.currstudy}</p>
            <p>{data.exp}</p>
        </div>
    )
}