
import {useEffect, useState} from "react";
import UserData from '../component/userData';

//route

import './Home.css';

import Tablecomponent from '../component/tableComponent'


// const API = "https://jsonplaceholder.typicode.com/users";
const API = "https://jsonplaceholder.org/users";



function Home() {



  const [users, setUsers] = useState([]);
  const [deleteRows, setDeleteRows] = useState([]);
  const [totalUsers, setTotalUsers] = useState();

//   console.log("selected rows",deleteRows)


  const fetchUsers = async (url) => {
      try {
          const res = await fetch(url);
          const data = await res.json();
          if (data.length > 0) {
              setUsers(data);
              setTotalUsers(data.length)
          }
          console.log(data);
      } catch (e) {
          console.error(e)
      }
  }

  //delete user
  const deleteUsers = async (id) => {
    console.log("delete user function",id.length)

    try {
        for (var i =0;i<id.length;i++) {

        const res = await fetch(`https://jsonplaceholder.org/users/${id[i]}}`, {
            method: 'DELETE',
          },);
        // const data = await res.json();
        if (res.status != 200) {
            return
        }
        else{
            setUsers(users.filter((user)=>{
                return user.id != id[i]
            }))
        }
        console.log(res);

    }
    // setDeleteRows([])

    } catch (e) {
        console.log("error while deleting",e)
    }
}


  useEffect(() => {
      fetchUsers(API)

      console.log('i fire once');

  }, [])

  return (
    <div className='container'>
        {/* <div className="buttonSection">
      <p>Total Clusters:{totalUsers}</p>

    <div>
    <button onClick={()=>deleteUsers(deleteRows)}>delete</button>
      <button>Add</button>
      <button>Refresh</button>
    </div>


        </div>
      <div className='tableContainer'>

      <table>
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
            <UserData users={users} deleteRows={setDeleteRows}/>
            
            </tbody>
        </table>
        </div> */}

        {users.length > 0 ?  <Tablecomponent users={users} setUsers={setUsers} totalUsers={totalUsers}/> : null}
    </div>
  );
}

export default Home;