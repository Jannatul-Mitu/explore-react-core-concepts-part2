export default function User({user}) {
    const {name, email} = user;
    return (
        <div style={{border: '2px solid tomato', borderRadius: '15px', margin: '15px', padding: '15px'}}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}