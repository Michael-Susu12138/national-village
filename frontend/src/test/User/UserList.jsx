import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}api/user`, {
        withCredentials: true, // This tells Axios to send the cookie with the request
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) =>
        console.error("There was an error retrieving the user data:", error)
      );
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
