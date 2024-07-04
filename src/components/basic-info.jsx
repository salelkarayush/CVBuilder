export default function App({data , onChange}){
    return(
        <div className="input-selection">
        <label>Name:</label>
        <br/>
        <input
            value={data.name}
            onChange = {(e) =>onChange({...data, name: e.target.value})}
        />
        <br />
        <label>Email:</label>
        <br/>
        <input
            value={data.email}
            onChange = {(e) =>onChange({...data, email: e.target.value})}
        />
        <br />
        <label>Phone:</label>
        <br/>
        <input
            value={data.phoneNumber}
            onChange = {(e) =>onChange({...data, phoneNumber: e.target.value})}
        />
        </div>
    );
}