export default function App({data , onChange}){
    return(
        <div className="input-selection">
        <label>College Name:</label>
        <br/>
        <input
            value={data.scname}
            onChange = {(e) =>onChange({...data, scname: e.target.value})}
        />
        <br />
        <label>Current Education:</label>
        <br/>
        <input
            value={data.currstudy}
            onChange = {(e) =>onChange({...data, currstudy: e.target.value})}
        />
        <br />
        <label>Experience:</label>
        <br/>
        <input
            value={data.exp}
            onChange = {(e) =>onChange({...data, exp: e.target.value})}
        />
        </div>
    );
}