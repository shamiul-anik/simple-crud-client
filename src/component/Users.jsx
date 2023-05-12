import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './Users.css';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted successfully!")
          const remainingUsers = users.filter(user => user._id !== id)
          setUsers(remainingUsers);
        }
      });
  }
  return (
    <div>
      <h3>Total Users: {users.length}</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user._id}</td>
                <td>
                  <Link to={`/update/${user._id}`}><button>Update</button></Link>
                </td>
                <td><button onClick={() => handleDelete(user._id)}>X</button></td>
              </tr>
              
            )
              })
            }
          </tbody>
        </table>

        
      </div>
    </div>
  );
};

export default Users;