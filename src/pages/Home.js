
import {useEffect, useState} from "react";
import UserData from '../component/userData';

import './Home.css';


const API = "https://jsonplaceholder.typicode.com/users";

function Home() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
      try {
          const res = await fetch(url);
          const data = await res.json();
          if (data.length > 0) {
              setUsers(data);
          }
          console.log(data);
      } catch (e) {
          console.error(e)
      }
  }


  useEffect(() => {
      fetchUsers(API);
  }, [])

  return (
    <div className='container'>
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
            <UserData users={users}/>
            
            </tbody>
        </table>
        </div>
    </div>
  );
}

export default Home;