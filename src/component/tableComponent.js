
import {useEffect, useState} from "react";
import UserData from '../component/userData';
import {useNavigate} from 'react-router-dom'



import '../pages/Home.css'

//route

// import './Home.css';


// const API = "https://jsonplaceholder.typicode.com/users";
const API = "https://jsonplaceholder.org/users";



function Tablecomponent({users,setUsers,totalUsers}) {

const navigate = useNavigate()




//   const [users, setUsers] = useState([]);
  const [deleteRows, setDeleteRows] = useState([]);
//   const [totalUsers, setTotalUsers] = useState();

  const [allUsers, setAllUsers] = useState();


  const [selectedRows, setSelectedRows] = useState([]);

  

  console.log("all users",allUsers)
  console.log("props users",users)



  //delete user
  const deleteUsers = async (id) => {
    console.log("delete user function",id.length)

    try {
        for (let i =0;i<id.length;i++) {

        const res = await fetch(`https://jsonplaceholder.org/users/${id[i]}`, {
            method: 'DELETE',
          },);
        // const data = await res.json();
        if (res.status != 200) {
            return
        }
        else{
            setAllUsers([...allUsers.filter((user)=>{
                return user.id != id[i]
            })])

        }
        console.log(res);
        setSelectedRows([])

    }
    // console.log("end of for",users)

    } catch (e) {
        console.log("error while deleting",e)
    }

}


useEffect(() => {
    console.log('Updated myArray:', selectedRows);
    // deleteRows(selectedRows);
    setAllUsers(users)
  }, [users]);


  

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
    <div>
        <div className="buttonSection">
      <p>Total Clusters:{totalUsers}</p>

    <div>
    <button onClick={()=>deleteUsers(selectedRows)}>delete</button>
      <button onClick={()=> navigate('/Add')}>Add</button>
      <button>Refresh</button>
    </div>
      
      {/* <p style={{backgroundColor:"red"}}>Welcome to the world of React.js</p> */}


        </div>
      <div className='tableContainer'>

      {/* <table > */}
      <table class="table table-striped">

            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
                
            </tr>
            </thead>
            <tbody>
            {/* <UserData users={users} deleteRows={setDeleteRows}/> */}
           { allUsers?.map((curUser) => {
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
                                <button onClick={()=> navigate('/sidebar',{state:{firstname}})}>view</button>
                            </td>
                        </tr>
                    )
                })
            }
            
            
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default Tablecomponent;