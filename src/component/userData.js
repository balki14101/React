import {useNavigate} from 'react-router-dom'

const UserData = ({users}) => {

    const navigate = useNavigate()
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td onClick={()=>{alert("alert message")}}>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                            <td>
                                <button onClick={()=> navigate('/main',{state:{name}})}>view</button>
                            </td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;