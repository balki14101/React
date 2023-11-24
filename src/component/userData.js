import {useEffect, useState,useRef} from "react";

import {useNavigate} from 'react-router-dom'

const UserData = ({users,deleteRows}) => {

    const navigate = useNavigate()

    const [selectedRows, setSelectedRows] = useState([]);

    // const rowsRef = useRef('')

    // rowsRef.current = selectedRows

    useEffect(() => {
        console.log('Updated myArray:', selectedRows);
        deleteRows(selectedRows);
      }, [selectedRows]);
    



    const handleCheckboxChange = (id) => {
        // Update the selectedRows state based on checkbox changes
        if (selectedRows.includes(id)) {
          setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
          setSelectedRows([...selectedRows, id]);
        }

        // console.log("checkbox",rowsRef.current)
        

      };


    return (
        <>
            {
                users.map((curUser) => {
                    const {id, firstname, email} = curUser;
                    const {street, city, zipcode} = curUser.address;


                    return (
                        <tr key={id}>
                            <td> 
                  <input
                  type="checkbox"
                  checked={selectedRows.includes(id)}
                  onChange={() => handleCheckboxChange(id)}
                />
                                {/* {id} */}
                                </td>
                            <td onClick={()=>{alert("alert message")}}>{firstname}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                            <td>
                                <button onClick={()=> navigate('/main',{state:{firstname}})}>view</button>
                            </td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;