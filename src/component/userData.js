const UserData = ({users}) => {
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
                                <button>view</button>
                            </td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;