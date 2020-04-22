import React, { useState } from 'react';
import './App.css';
import UserList from './UserList/UserList'
import CreateUser from './CreateUser/CreateUser'

const App = () => {
  const users = [
    {name: 'Angular', id: 45245},
    {name: 'React', id: 85324},
    {name: 'Node', id: 80675},
    {name: 'Vue', id: 24464}
  ];

  const [newUsers, addUser] = useState([...users]);

  const createNewUser = newUser => {
    addUser([...newUsers, newUser]);
  }

  const deleteNeUser = userForDelete => {
    const index = newUsers.findIndex((user) => user.name = userForDelete);
    newUsers.splice(index, 1);
    addUser([...newUsers]);
  }

  return (
    <div className="App">
      <UserList users={newUsers} deleteNeUser={deleteNeUser}/>
      <CreateUser addNewUser={createNewUser} />
    </div>
  );
}

export default App;
